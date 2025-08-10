import React from 'react'

interface VideoIdPageProps {
  params: Promise<{ videoId: string }>;
}

const VideoIdPage = async ({ params }: VideoIdPageProps) => {
  console.log('Server component');

  const { videoId } = await params;

  return (
    <div>VideoIdPage {videoId}</div>
  )
}

export default VideoIdPage