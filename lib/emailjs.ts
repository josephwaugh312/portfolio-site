// EmailJS configuration from environment variables
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
}

// EmailJS SDK loaded via script tag
declare global {
  interface Window {
    emailjs: any
  }
}

export const sendEmail = async (formData: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  // Check if emailjs is loaded
  if (typeof window !== 'undefined' && window.emailjs) {
    try {
      const response = await window.emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      return { success: true, response }
    } catch (error) {
      console.error('EmailJS error:', error)
      return { success: false, error }
    }
  } else {
    console.error('EmailJS SDK not loaded')
    return { success: false, error: 'EmailJS SDK not loaded' }
  }
}