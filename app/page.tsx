import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline ">
        Popular Companions.
      </h1>

      <section className="home-section">
          <CompanionCard
              id="123"
              name="Neura The Brainy Explorer"
              topic="Neural Network of the Brain"
              subject="Science"
              duration={45}
              color="#ffda6e"
          />
          <CompanionCard
              id="234"
              name="Countsy the number Wizard"
              topic="Derivatives and Integrals"
              subject="Maths"
              duration={50}
              color="#e5d0ff"
          />
          <CompanionCard
              id="345"
              name="Verba the Vocab Builder"
              topic="language"
              subject="English Literature"
              duration={35 }
              color="#BDE7FF"
          />
      </section>

      <section className="home-section">
          <CTA />
          <CompanionsList
              title="Recently Completed Sessions"
              companions={recentSessions}
              classNames= "w-2/3 max-lg:w-full"
          />
      </section>

    </main>
  )
}

export default Page