import React from 'react'
import { Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react'

const SocialMediaConnect: React.FC = () => {

  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: `https://api.instagram.com/oauth/authorize?client_id=918385736851138&redirect_uri=https://localhost:5173/Home&response_type=code&scope=user_profile,user_media`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_FACEBOOK_CLIENT_ID&redirect_uri=https://your-redirect-url.com&response_type=code&scope=email,public_profile`
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: `https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=https://your-redirect-url.com&response_type=code&scope=https://www.googleapis.com/auth/youtube.readonly`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_LINKEDIN_CLIENT_ID&redirect_uri=https://your-redirect-url.com&scope=r_liteprofile%20r_emailaddress`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://api.twitter.com/oauth/authenticate?oauth_token=YOUR_TWITTER_OAUTH_TOKEN`
    }
  ]


  const handleConnect = (url: string) => {
    // In a real application, you would need to include your app's client ID, 
    // redirect URI, and other necessary parameters in the URL
    window.open(url, '_blank', 'width=600,height=600')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Connect Your Account</h1>
      <div className="flex space-x-4">
        {socialPlatforms.map((platform) => (
          <button
            key={platform.name}
            onClick={() => handleConnect(platform.url)}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label={`Connect to ${platform.name}`}
          >
            <platform.icon className="w-8 h-8 text-gray-800" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default SocialMediaConnect