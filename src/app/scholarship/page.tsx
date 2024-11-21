import { BenefitScholarship } from "@/components/Scholarship/BenefitScholarship";
import { FormScholarship } from "@/components/Scholarship/FormScholarship";
import { HeroScholarship } from "@/components/Scholarship/HeroScholarship";
import { OverviewScholarship } from "@/components/Scholarship/OverviewScholarship";

export default function ScholarshipPage() {
      return (
            <main className="flex flex-col bg-dark">
                  <HeroScholarship />
                  <div className="flex flex-col py-24">
                        <OverviewScholarship />
                        <BenefitScholarship />
                        <FormScholarship />
                  </div>
            </main>
      )
}