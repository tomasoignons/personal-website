import { ref, computed } from 'vue'
import projectsData from '@/data/projects.json'

export function useProject(projectId) {
  const project = ref(projectsData[projectId] || null)

  const loadProject = () => {
    if (projectsData[projectId]) {
      project.value = projectsData[projectId]
    }
  }

  // Make project reactive and immediately available
  if (!project.value) {
    loadProject()
  }

  const setPageTitle = () => {
    if (project.value) {
      document.title = `${project.value.title} - Emmanuel Omont Portfolio`
    }
  }

  const getBadgeClass = computed(() => {
    return project.value?.categoryClass || 'badge-primary'
  })

  const getButtonClass = computed(() => {
    if (!project.value) return 'btn-primary'
    
    const categoryClasses = {
      'Data Analysis': 'btn-primary',
      'Machine Learning': 'btn-secondary', 
      'Telegram Bot': 'btn-accent',
      'Content Creation': 'btn-neutral',
      'Research Project': 'btn-info',
      'Startup': 'btn-warning'
    }
    
    return categoryClasses[project.value.category] || 'btn-primary'
  })

  const getCallToActionText = computed(() => {
    if (!project.value) return ''
    
    const categoryTexts = {
      'Data Analysis': 'This project showcases advanced data collection, processing, and analysis techniques. Perfect for businesses looking to leverage data-driven insights for strategic decision making.',
      'Machine Learning': 'This project showcases advanced machine learning techniques in multimodal AI. Interested in similar research or collaboration opportunities in AI safety and content moderation.',
      'Telegram Bot': 'Join over 1000 students who are already saving money with this bot. Get personalized deal notifications and never miss a great discount again.',
      'Content Creation': 'This project showcases expertise in design education, content creation, and community building. Available for consulting on presentation design and visual communication projects.',
      'Research Project': 'This cutting-edge research project combines machine learning, decentralized systems, and frontend development. Open to discussions about collaborative research and privacy-preserving ML technologies.',
      'Startup': 'This startup experience showcases expertise in scalable backend development and AI system integration. Interested in AI-powered analytics and system architecture discussions.'
    }
    
    return categoryTexts[project.value.category] || 'This project demonstrates technical expertise and innovation.'
  })

  const getTechBadgeClass = (tech) => {
    const techClasses = {
      'Python': 'badge-primary',
      'JavaScript': 'badge-primary',
      'Node.js': 'badge-primary',
      'Vue.js': 'badge-primary',
      'React': 'badge-primary',
      
      'VisualBERT': 'badge-secondary',
      'PyTorch': 'badge-secondary',
      'TensorFlow': 'badge-secondary',
      'Machine Learning': 'badge-secondary',
      'TensorFlowJS': 'badge-secondary',
      'Telegram API': 'badge-secondary',
      'Design': 'badge-secondary',
      'Web Assembly': 'badge-secondary',
      
      'Computer Vision': 'badge-accent',
      'Automation': 'badge-accent',
      'PowerPoint': 'badge-accent',
      'Decentralized Systems': 'badge-accent',
      
      'NLP': 'badge-neutral',
      'Social Media': 'badge-neutral',
      'Collaboration': 'badge-neutral',
      
      'MongoDB': 'badge-info',
      'Web Scraping': 'badge-info',
      'Adobe Creative Suite': 'badge-info',
      
      'Transformers': 'badge-warning',
      'Content Creation': 'badge-warning',
      
      'Express.js': 'badge-success',
      'Docker': 'badge-success',
      'BeautifulSoup': 'badge-success',
      'Pandas': 'badge-success',
      'Selenium': 'badge-success'
    }
    
    return techClasses[tech] || 'badge-ghost'
  }

  const formatFeature = (feature) => {
    // Simple formatting for features - just return as is since they may contain HTML
    return feature
  }

  return {
    project,
    setPageTitle,
    getBadgeClass,
    getButtonClass,
    getCallToActionText,
    getTechBadgeClass,
    formatFeature
  }
}