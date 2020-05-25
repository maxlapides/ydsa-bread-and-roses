import React from "react"
import { Element } from "react-scroll"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InternalLink from "../components/internal-link"

const WhereWeStand = ({ data }) => (
  <Layout title="Where We Stand" color="green" heroImageName="where-we-stand">
    <SEO title="Where We Stand" ogImage="where-we-stand" />
    <div className="sidebar">
      <h2>Outline</h2>
      <ul>
        <li>
          <InternalLink to="for-socialism">For Socialism</InternalLink>
        </li>
        <li>
          <InternalLink to="centrality-of-class-struggle">
            The Centrality of Class Struggle
          </InternalLink>
        </li>
        <li>
          <InternalLink to="against-oppression">
            Against Oppression
          </InternalLink>
        </li>
        <li>
          <InternalLink to="democratic-road">
            Democratic Road to Socialism
          </InternalLink>
        </li>
        <li>
          <InternalLink to="independent-political-action">
            Independent Political Action
          </InternalLink>
        </li>
        <li>
          <InternalLink to="rank-and-file-strategy">
            Rank-and-File Strategy
          </InternalLink>
        </li>
        <li>
          <InternalLink to="internationalism">Internationalism</InternalLink>
        </li>
        <li>
          <InternalLink to="democracy-not-horizontalism">
            Democracy, Not Horizontalism
          </InternalLink>
        </li>
      </ul>
    </div>

    <div className="content" id="wws">
      <Element name="for-socialism" id="for-socialism">
        <h2>For Socialism</h2>
        <p>
          We are committed to building a{" "}
          <a href="https://socialistcall.com/2018/09/26/what-is-democratic-socialism/">
            democratic socialist world
          </a>
          , one that ends the exploitation and oppression that define capitalism
          and guarantees everyone the right to live freely and creatively. In a
          socialist society, a democratically managed economy will empower us to
          confront climate change and build a sustainable future. And for the
          first time, real democracy — in which people, not money, rule — will
          define politics and extend to our workplaces and communities.
        </p>
      </Element>

      <Element
        name="centrality-of-class-struggle"
        id="centrality-of-class-struggle"
      >
        <h2>The Centrality of Class Struggle</h2>
        <Img fluid={data.class.childImageSharp.fluid} />
        <p>
          Capitalism is a system{" "}
          <a href="https://www.jacobinmag.com/2014/12/capitalisms-gravediggers/">
            built on exploitation
          </a>
          , one in which people are divided into classes that determine what
          they get and what they have to do to survive. On top, the capitalist
          class — a tiny minority made up of owners of major corporations and
          powerful managers — dominates society. The profit and rent they live
          off of comes from the vast majority of the population on the bottom:
          the working class.
        </p>
        <p>
          But in this exploitative relationship, those on top also depend on the
          labor of working people. As a result, capitalism endows us with
          enormous potential power. As workers, we have the power to stop
          production and the flow of profits, or to create a political crisis
          when public employees strike. And as the overwhelming majority of
          society we have the capacity to overturn the political system that
          protects capitalist power.
        </p>
        <p>
          Ending capitalism will require mobilizing this immense power, and this
          puts the question of{" "}
          <a href="https://www.jacobinmag.com/2016/03/working-class-capitalism-socialists-strike-power/">
            organizing the working class
          </a>{" "}
          as workers at the center of questions of strategy. This key point —
          what we call the{" "}
          <a href="https://socialistcall.com/2018/09/07/class-politics-and-the-fight-against-oppression/">
            centrality of class struggle
          </a>{" "}
          — is at the heart of our perspective on what it will take to change
          the world.
        </p>
      </Element>

      <Element name="against-oppression" id="against-oppression">
        <h2>Against Oppression</h2>
        <p>
          Capitalism stokes racial, national, and gender oppression to keep
          working people divided and to justify exploitation. And by creating an
          intense competition for jobs, housing, and decent schools, the
          capitalist system pits workers against each other and makes prejudiced
          ideas seem plausible.
        </p>
        <p>
          As part of our vision of winning a truly free society, socialists are
          committed to ending all forms of oppression. To reach this goal, we
          strive to build a united multiracial working-class movement. Our
          strategy for fighting oppression and building unity has three
          components.
        </p>
        <p>
          First, we prioritize the fight for broad classwide demands — such as{" "}
          <a href="https://socialistcall.com/2018/10/26/why-we-fight-for-medicare-for-all/">
            healthcare
          </a>
          , education, jobs, and housing — that benefit all working-class people
          and that can therefore galvanize the largest numbers of people to
          fight in their own self-interest. Demands such as{" "}
          <a href="https://www.jacobinmag.com/2017/12/single-payer-feminism-medicare-for-all-health-women">
            Medicare for All
          </a>{" "}
          would also{" "}
          <a href="https://www.jacobinmag.com/2015/08/bernie-sanders-black-lives-matter-civil-rights-movement/">
            disproportionately benefit
          </a>{" "}
          oppressed groups and reduce the competition for resources that gives
          rise to prejudice among working people. Such demands, when achieved,
          would curtail the power of oppressors, including abusive bosses,
          despotic immigration agencies, profit-seeking insurance companies, and
          racist landlords.
        </p>
        <p>
          Second, socialists must tackle specific forms of domination and
          division head on. Today in the United States key battles against
          oppression include, but by no means are limited to, the fight against
          mass incarceration and police brutality; campaigns to defend and
          expand reproductive rights; fights to eliminate gender violence; the
          struggle by queer people, disabled people, women, and people of color
          to stop job and housing discrimination; and the movement to end
          deportations of undocumented immigrants. Socialists should build these
          struggles — particularly when they can mobilize large numbers of
          people — and find ways to incorporate these demands in union struggles
          and electoral campaigns.
        </p>
        <p>
          Finally, the importance of class unity also leads us to oppose a
          perspective common in some radical circles and rampant among liberals.
          These groups treat oppression as principally a consequence of bad
          ideas rather than of the structures of capitalism, and as a result{" "}
          <a href="https://www.opendemocracy.net/ourkingdom/mark-fisher/exiting-vampire-castle">
            they prioritize shaming
          </a>{" "}
          working people to get them to change their behavior. These activists
          also often claim to speak on behalf of whole groups of people whom
          they do not represent, and refuse to build unity with workers who they
          deem to be “privileged”. These anti-solidaristic practices undermine
          struggles against exploitation and oppression by dividing our forces.
          It’s necessary to defeat racism and sexism inside the working class —
          but this can’t be done effectively without positive appeals to shared
          class interests. If we want to defeat the capitalist class, we need to
          unite the working-class majority.
        </p>
      </Element>

      <Element name="democratic-road" id="democratic-road">
        <h2>Democratic Road to Socialism</h2>
        <Img fluid={data.demroad.childImageSharp.fluid} />
        <p>
          Socialist organizing should be oriented toward the working-class
          majority who are not yet politically active. We need to bring people
          into open conflict with capitalists and their politicians around
          immediate grievances, while making connections between each specific
          issue and the underlying problem: capitalism. Our goal is to create a
          mass movement that can force elites to make concessions — and
          eventually remove them from power.
        </p>
        <p>
          To do this, we need to work openly in movement struggles and electoral
          politics as socialists. And we have to fight for a viable path to
          socialism — what we call the{" "}
          <a href="https://socialistcall.com/2018/09/26/what-is-democratic-socialism/">
            democratic road to socialism
          </a>{" "}
          — that takes seriously the particular opportunities and challenges of
          organizing in the United States.
        </p>
        <p>
          We know that winning elections in a capitalist society is not the same
          as taking power. Without an organized working class, primarily
          organized in the workplace where workers have the most power,
          socialist electoral victories will mean little. The essential task of
          the democratic road to socialism is rebuilding the organized power of
          the working class.
        </p>
        <p>
          But this working-class movement will ultimately have to contend with
          state power. Toward this end, we seek to build a{" "}
          <a href="https://www.jacobinmag.com/2017/12/our-road-to-power">
            mass party of the working class
          </a>{" "}
          with a socialist program. Such a party will fight to win structural
          reforms that increase the power of the working class and use elections
          and mobilizations to convince more and more people of the need for
          socialism.
        </p>
        <p>
          We do not pretend to know exactly how a transition from capitalism to
          socialism will ultimately play out, of course. But we want to build a
          socialist party that can take advantage of a crisis of legitimacy of
          capitalism, when it surely arrives. A party can even help foment a
          crisis, through helping to build powerful movements from below —
          millions of people acting on their own behalf in strikes, workplace
          takeovers, student occupations, and mass demonstrations — and by
          electing a socialist government. Such mobilizations and such a
          government would together be able to create a rupture with the
          capitalist system. And since no ruling class has ever peacefully ceded
          power, in a transitional period a socialist government backed by
          popular mobilizations will have to{" "}
          <a href="https://www.jacobinmag.com/2016/09/chile-coup-santiago-allende-social-democracy-september-11-2">
            do everything necessary
          </a>{" "}
          to defend the mandate they have won to carry out a program of
          redistribution,{" "}
          <a href="https://www.jacobinmag.com/2016/11/finance-banks-capitalism-markets-socialism-planning">
            expropriation
          </a>
          , and{" "}
          <a href="https://socialistcall.com/2018/11/27/the-constitution-and-the-class-struggle/">
            democratic reform
          </a>{" "}
          of state institutions.
        </p>
        <p>
          Our perspective differs from alternative socialist strategies. We
          reject a strategy of gradually winning reforms which never seeks to
          break with the capitalist system. Often this strategy also embraces
          liberal tactics for winning reforms that prioritize electing and
          winning the ear of benevolent elites rather than challenging capital’s
          right to rule or building the working class’s ability to fight. On the
          other hand, we also{" "}
          <a href="https://drive.google.com/file/d/1Ct4Bsd-3AzgxJoY2SoTSfNLnsrnQQsR7/view">
            reject a strategy of insurrection
          </a>{" "}
          which mistakenly seeks to adopt a model from vastly different
          historical conditions and apply it to our situation today. We oppose{" "}
          <a href="https://socialistcall.com/2018/08/16/liberalism-ultraleftism-or-mass-action/">
            ultra-left tactics
          </a>{" "}
          that substitute adventures organized by a small cadre of activists for
          a mass, organized working-class movement. And we oppose politics
          defined by radical posturing that appeals only to the already
          convinced.
        </p>
      </Element>

      <Element
        name="independent-political-action"
        id="independent-political-action"
      >
        <h2>Independent Political Action</h2>
        <p>
          We are for a{" "}
          <a href="https://www.jacobinmag.com/2016/12/socialist-party-bernie-sanders-labor-capitalism/">
            mass working-class party
          </a>{" "}
          that contests elections and builds movements. To legitimately
          represent the working class, such a party must be born out of a level
          of class struggle and unity far greater than exists today. Until such
          a time arrives, we see DSA as a pre-party organization, one of many
          groups working to develop the forces necessary to build such a party.
          To do so, we need an oppositional electoral strategy that remains
          completely independent from the Democratic Party apparatus. Such a
          strategy must reject the idea that socialists can capture the
          Democratic Party and instead seek to break unions and social movements
          from their current dependence on the Democratic Party establishment.
        </p>
        <p>
          At the same time, we can maintain tactical flexibility on the question
          of what ballot line socialists run on. In certain cases it also makes
          sense for DSA to endorse class struggle candidates who are not
          socialists but whose campaigns advance key parts of our platform. Such
          campaigns can help build class consciousness and polarize (and
          eventually split) the Democratic Party coalition.
        </p>
        <p>
          Candidates running as socialists should serve the movement, never the
          other way around. Socialist politicians should act as{" "}
          <a href="https://socialistcall.com/2018/08/16/bernie-2020/">
            organizers for the socialist movement
          </a>{" "}
          and as popularizers of our ideas first, and as legislators second.
        </p>
      </Element>

      <Element name="rank-and-file-strategy" id="rank-and-file-strategy">
        <h2>Rank-and-File Strategy</h2>
        <p>
          The most critical task for socialists is to help develop a labor
          movement that is militant, left-wing, and democratic. Working-class
          people’s greatest strength is in the workplace because capitalists
          depend on the exploitation of labor to make their profits. And the
          workplace brings workers of all backgrounds together and generates
          common interests that can be the basis for powerful movements.
        </p>
        <p>
          With this in mind, socialists should organize{" "}
          <a href="https://jacobinmag.com/2018/08/unions-socialists-rank-and-file-strategy-kim-moody">
            as rank-and-file workers
          </a>{" "}
          and rebuild the connection between the socialist movement and the
          militant minority of workers already organizing in the labor movement.
          Together, we can work to build unions that are democratic forces ready
          to confront employers, organize the unorganized, and lead wider
          working-class political fights.
        </p>
        <p>
          Given our limited resources, such attention should be focused for now
          on{" "}
          <a href="https://www.jacobinmag.com/2016/08/everything-old-is-new-again-mcaveley">
            strategic industries
          </a>{" "}
          — those in which workers have the best opportunities to organize and
          the most leverage to make demands on employers. Where possible, we
          should work with union officials who share our perspectives, while
          recognizing that in many unions existing officials stand in the way of
          this vision.
        </p>
      </Element>

      <Element name="internationalism" id="internationalism">
        <h2>Internationalism</h2>
        <Img fluid={data.internationalism.childImageSharp.fluid} />
        <p>
          Winning socialism will require a protracted struggle against the
          ruling class in the United States. But the struggle for socialism is{" "}
          <a href="https://www.jacobinmag.com/2017/07/second-international-bernstein-rosa-luxemburg-unions-world-war">
            also international
          </a>
          . The power of the world’s ruling classes is protected by the
          imperialist policies of our government, among others. As socialists in
          the U.S., we have a heightened responsibility to fight against all
          forms of military intervention.
        </p>
        <p>
          We also stand in solidarity with socialist and popular movements
          around the world against capitalism and authoritarianism. For this
          reason we reject the false logic that “the enemy of my enemy is my
          friend” (what is sometimes called “campism”), a policy that in the
          name of anti-imperialism has led to the defense of brutal
          dictatorships.
        </p>
        <p>
          Our goal is a socialist movement that wins all across the world.
          Building strong relationships with socialist parties and organizations
          in other countries — including sending and hosting delegations,
          participating in international debates about socialist strategy, and
          ultimately coordinating strategy — is a step towards that goal.
        </p>
      </Element>

      <Element
        name="democracy-not-horizontalism"
        id="democracy-not-horizontalism"
      >
        <h2>Democracy, Not Horizontalism</h2>
        <p>
          We want to build a movement that empowers everyone to participate in
          building a better society. In our projects today therefore — and in a
          future socialist society — democracy is essential.
        </p>
        <p>
          A{" "}
          <a href="https://socialistcall.com/2018/09/05/for-a-democratic-and-effective-dsa/">
            democratic organization
          </a>{" "}
          is one in which members have power through collective political
          deliberation and voting. Direct decision-making by a membership body
          is one part of this democracy, and members should also elect
          accountable representatives to act on their behalf. In these
          elections, candidates should run on platforms that allow members to
          vote for or against them on political grounds. Members should also be
          free to organize together on political grounds to promote their vision
          for the organization.
        </p>
        <p>
          We oppose horizontalist practices that distort democracy into a series
          of endless meetings, replace accountable leadership with the{" "}
          <a href="https://www.jofreeman.com/joreen/tyranny.htm">
            tyranny of structurelessness
          </a>
          , and drain decisions of consequences. We must make decisions about
          priorities and then commit to carrying them out.
        </p>
      </Element>
    </div>
  </Layout>
)

export const WwsPhoto = graphql`
  fragment wwsPhoto on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const wwsQuery = graphql`
  query {
    class: file(relativePath: { eq: "where-we-stand/WWS-class-struggle.png" }) {
      ...wwsPhoto
    }
    demroad: file(relativePath: { eq: "where-we-stand/WWS-dem-road.png" }) {
      ...wwsPhoto
    }
    internationalism: file(
      relativePath: { eq: "where-we-stand/WWS-internationalism.png" }
    ) {
      ...wwsPhoto
    }
  }
`

export default WhereWeStand
