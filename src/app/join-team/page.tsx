import { HeaderBackground } from "@/components/HeaderBackground/HeaderBackground";
import { DownloadComponent } from "@/components/JoinTeam/DownloadComponent";
import { FormJoinTeam } from "@/components/JoinTeam/FormJoinTeam";
import { TeamCards } from "@/components/JoinTeam/TeamCards";

export default function JoinTeamPage() {
      return (
            <main className="bg-dark">
                  <HeaderBackground title="Join Our Team." />
                  <TeamCards />
                  <DownloadComponent />
                  <FormJoinTeam />
            </main>
      )
}