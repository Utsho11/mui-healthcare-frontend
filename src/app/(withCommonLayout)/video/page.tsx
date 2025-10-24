import VideoCall from "@/components/UI/VideoCall/VideoCall";

const page = ({
  searchParams,
}: {
  searchParams: { videoCallingId: string };
}) => {
  const videoCallingId = searchParams.videoCallingId;

  return <VideoCall videoCallingId={videoCallingId} />;
};

export default page;
