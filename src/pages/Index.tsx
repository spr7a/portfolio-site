import ProfileSection from "@/components/ProfileSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto space-y-6">
        <ProfileSection />
        <CodingProfilesSection />
      </div>
    </div>
  );
};

export default Index;
