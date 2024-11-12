import { CoachList } from "@/components/About/CoachList";
import { HistoryVisionMission } from "@/components/About/HistoryVisionMission";
import { HeaderBackground } from "@/components/HeaderBackground/HeaderBackground";

export default function AboutPage() {
      return (
            <main className="flex flex-col bg-dark">
                  <HeaderBackground title="Tentang Kami" />
                  <HistoryVisionMission />
                  <CoachList />
            </main>
      )
}