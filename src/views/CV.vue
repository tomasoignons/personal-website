<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <section class="py-20 bg-gradient-to-br from-muted to-background">
      <div class="max-w-6xl mx-auto px-6 text-center animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-6">
          My <span class="text-primary">CV</span>
        </h1>
        <p class="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
          My education, experience and skills on one page.
        </p>
        <div v-if="status === 'ready'" class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="a" :href="CV_URL" :download="CV_FILENAME" size="lg" class="px-8 hover:scale-105">
            <Download class="w-5 h-5" />
            Download PDF
          </Button>
          <Button as="a" :href="CV_URL" target="_blank" rel="noopener noreferrer" variant="outline" size="lg" class="px-8 hover:scale-105">
            <ExternalLink class="w-5 h-5" />
            Open in New Tab
          </Button>
        </div>
      </div>
    </section>

    <!-- PDF Viewer -->
    <section class="pb-20 bg-background">
      <div class="max-w-5xl mx-auto px-6">
        <Card v-if="status === 'ready'" class="shadow-xl bg-muted">
          <iframe
            :src="`${CV_URL}#view=FitH`"
            title="Emmanuel Omont - CV"
            class="w-full h-[75vh] md:h-[1100px] border-0"
          ></iframe>
        </Card>

        <Card v-else-if="status === 'missing'" class="bg-muted">
          <CardContent class="items-center text-center py-16">
            <FileText class="w-12 h-12 text-primary mb-2" />
            <CardTitle class="text-foreground">CV coming soon</CardTitle>
            <p class="text-foreground/70 mb-4">
              The PDF isn't online yet. In the meantime, feel free to get in touch.
            </p>
            <Button :as="RouterLink" :to="{ path: '/', hash: '#contact' }">Get In Touch</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Download, ExternalLink, FileText } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

// Put the PDF in public/cv.pdf (or change the path here)
const CV_URL = '/cv.pdf'
const CV_FILENAME = 'Emmanuel_Omont_CV.pdf'

const status = ref('loading')

onMounted(async () => {
  try {
    // A missing file falls back to index.html, so check the content type too
    const response = await fetch(CV_URL, { method: 'HEAD' })
    const isPdf = response.headers.get('content-type')?.includes('pdf')
    status.value = response.ok && isPdf ? 'ready' : 'missing'
  } catch {
    status.value = 'missing'
  }
})
</script>
