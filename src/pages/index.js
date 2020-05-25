import React from "react"
import { Element } from "react-scroll"
import { Modal, Button } from "antd"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import shuffle from "lodash/shuffle"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import MailChimpSignUp from "../components/mailchimp-sign-up"

const candidates = [
  {
    name: "Matt Stone",
    position: "Co-Chair",
    bio: (
      <>
        <p>
          East Bay DSA is at a critical point, poised between our successful
          Bernie campaign and a challenging year marked by the pandemic,
          economic recession, and political crisis.
        </p>

        <p>
          <strong>
            I’m running for Co-Chair because I believe we can rise to these
            challenges. Together, we can build an organization rooted in the
            multiracial working class and primed to build an independent party
            in the coming years.
          </strong>
        </p>

        <p>
          I joined East Bay DSA in 2017 because I saw close family and friends
          struggling to pay bills and secure healthcare — and I began to
          understand the need to build a real political alternative to the
          neoliberal consensus.
        </p>

        <p>
          Since joining DSA, I’ve been proud to lead mass campaigns that advance
          that vision. I <strong>launched our DSA for Bernie campaign</strong>{" "}
          as a founding Co-Chair of the 2020 Committee,{" "}
          <strong>built the Jovanka Beckles field operation</strong> that
          knocked 18,000 doors, and drove all across California as a{" "}
          <strong>Regional Organizer for our M4A campaign</strong>. I also
          currently serve as an{" "}
          <strong>At-Large Steering Committee Member</strong> and on{" "}
          <strong>DSA’s National Electoral Committee</strong>, where I help
          organize DSA’s elected officials.
        </p>

        <p>
          This year, I’m committed to organizing our chapter to strategically
          build worker power and militancy. Together, we must:
        </p>

        <ul>
          <li>
            <strong>Commit to a rank-and-file strategy</strong> to rebuild the
            left-wing “militant minority” of the labor movement
          </li>
          <li>
            <strong>Confront racist responses</strong> to the pandemic by{" "}
            <strong>supporting frontline worker organizing</strong> and{" "}
            <strong>campaigning against austerity</strong>
          </li>
          <li>
            <strong>Build mass communications platforms</strong> like{" "}
            <em>Majority</em> to reach new audiences
          </li>
          <li>
            <strong>Grow and diversify East Bay DSA</strong> through mobilizers,
            leadership development, and active recruitment
          </li>
          <li>
            <strong>Unite the Bernie movement</strong> to lay the groundwork for
            a future independent party
          </li>
        </ul>

        <p>
          I’m proud to run on the Bread &amp; Roses slate, and I’m committed to
          working with comrades across all tendencies to build DSA. I would be
          honored to serve as Co-Chair and humbly ask for your support.
          Solidarity forever!
        </p>
      </>
    ),
  },
  {
    name: "Will Shattuc",
    position: "Vice Chair",
    bio: (
      <>
        <p>
          As an Oakland local, gentrification pushed me to protest the greed
          eating my city. In 2017,{" "}
          <strong>DSA taught me to organize for more</strong>.
        </p>

        <p>
          It’s been an immense privilege to be part of East Bay DSA and, as a
          member of the Bread &amp; Roses slate,{" "}
          <strong>
            I’m asking for your vote to serve as our next Vice Chair
          </strong>
          . Beyond serving At-Large on our chapter’s Steering Committee, I:
        </p>

        <ul>
          <li>
            Was Social Housing Co-Chair, helping win a rent control campaign in
            Hayward and helping lead our efforts for state-wide rent control.
          </li>

          <li>
            Walked picket lines during the Oakland and Union City teachers’
            strikes and captained canvasses for Jovanka Beckles.
          </li>

          <li>
            <strong>
              Dedicated the last year of my life full-time to Co-Chairing our
              DSA for Bernie campaign, the largest project our chapter has ever
              taken on
            </strong>
            , which helped deliver the fifth-largest economy in the world to
            democratic socialism on election day.
          </li>

          <li>
            Organized other California chapters to run DSA for Bernie campaigns
            as a Regional Organizer, training and growing their membership.{" "}
            <strong>
              We should take the project of a socialist California seriously and
              think more about DSA’s campaigns on a state-wide level, especially
              2022 elections.
            </strong>
          </li>
        </ul>

        <p>
          The austerity and layoffs following 2008 upended the lives of my
          family, friends, and community, throwing open the doors for horrendous
          gentrification.{" "}
          <strong>
            In this new crisis, DSA must be ready and organized to cohere the
            Bernie coalition to protect the lives of working-class people of all
            backgrounds from racist capitalism.
          </strong>
        </p>

        <p>
          That’s why I believe in an <strong>external-facing DSA</strong>, which
          takes on ambitious campaigns that are rooted in and materially better
          the lives of the working class while expanding and diversifying our
          membership and which{" "}
          <strong>give our members opportunities to grow</strong>. We live in an
          incredibly uncertain time, but the more dedicated, life-long
          socialists there are, the stronger we are for future struggles.
        </p>
      </>
    ),
  },
  {
    name: "Lindsey Moore",
    position: "Treasurer",
    bio: (
      <>
        <p>
          <strong>
            I’m running for Treasurer on the Bread &amp; Roses slate to ensure
            that our chapter and its campaigns have the resources and funding
            they need in a time of uncertainty but also unprecedented
            opportunity for the expansion of class consciousness, rank-and-file
            worker militancy, and fights against austerity and oppression.
          </strong>
        </p>

        <p>
          The past year has shown just how much we can grow and accomplish as a
          group of dedicated comrades working selflessly towards the project of
          building a socialist movement. DSA gained invaluable experience, as
          well as many new organizers and activists, through the DSA for Bernie
          campaign — and in the coming year we must work to bring what we have
          learned and who we have reached further into the broader struggle for
          socialism.
        </p>

        <p>
          I joined DSA last year after a long period of political frustration,
          and found my political home. My involvement with our chapter began
          with designing a flyer for a Bernie canvass, and quickly led to
          organizing phone banks, developing new organizers within our canvass
          planning team, and helping put on the biggest canvasses in East Bay
          DSA history.
        </p>

        <p>
          <strong>
            I’m proud to have developed and managed our Bernie campaign’s data
            infrastructure, which was key to reaching as much of the Bay Area’s
            multiracial working class as possible. The combination of
            on-the-ground organizing and running digital operations during this
            campaign gave me a multifaceted understanding of how well-designed
            and maintained systems benefit socialists in our battles with the
            capitalist class.
          </strong>
        </p>

        <p>
          I’m currently Co-Chair of the 2020 Committee and a member of the
          Design Working Group and Operations Committee. My experiences working
          alongside comrades over the last year have been some of the brightest,
          most challenging and rewarding moments of my life, and to serve the
          chapter as Treasurer would be an honor and privilege.
        </p>
      </>
    ),
  },
  {
    name: "Nick French",
    position: "Communications Secretary",
    bio: (
      <>
        <p>
          I’m honored to run for Communications Secretary on the Bread &amp;
          Roses slate. I joined DSA after Trump’s election, because I realized
          only a socialist movement could stop the continued rise of the far
          right. Since then I’ve found hope and purpose fighting alongside my
          comrades for a better world. Over the past two years I’ve helped lead
          our chapter’s very successful political education and communications
          work, as a Co-Chair of the Political Education and Communications
          Committees.
        </p>

        <p>
          I helped build our Socialist Night School program, which regularly
          brings in 50 or more attendees twice a month and has become a model
          for DSA chapters across the country.
        </p>

        <p>
          I’m also very proud of the work I’ve accomplished with comrades as
          editor of East Bay Majority, our chapter’s official publication. We’ve
          provided coverage and analysis of the struggles of East Bay teachers,
          nurses, and other workers that people can’t get anywhere else.
          Majority’s articles have been seen by tens of thousands of readers.
          We’ve also given a platform and experience to new socialist writers
          who have gone on to write for national publications.
        </p>

        <p>
          I’m running for Communications Secretary because I want to empower my
          comrades to make our successful communications work even stronger.
          Effective communications will be even more important now, given the
          difficulty of face-to-face organizing under COVID-19. We need to:
        </p>

        <ul>
          <li>
            <strong>Expand our reach</strong> through advertising and strategic
            social media promotion
          </li>
          <li>
            <strong>
              Ramp up production of propaganda and class-struggle journalism
            </strong>
            , through expanding recruitment and leadership development in our
            Communications Committee
          </li>
          <li>
            <strong>Amplify workers’ struggles against oppression</strong> of
            all kinds, in and outside the workplace
          </li>
          <li>
            Continue to <strong>name our enemies</strong>: the capitalist class
            and the capitalist system which allows them to profit off of
            everyone else’s suffering in the midst of a global pandemic
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Andrew Richner",
    position: "Recording Secretary",
    bio: (
      <>
        <p>
          Three years ago I walked into my first DSA meeting. Bernie had
          politicized me. Trump got me mad enough to fight back. With DSA, I
          found something unique—a serious, winnable path forward after Bernie’s
          run that was pragmatic but didn’t compromise a radical vision for a
          society free from exploitation and oppression. I joined on the spot.
        </p>

        <p>Since then, I’ve:</p>
        <ul>
          <li>
            Served as{" "}
            <strong>Co-Chair of the Member Engagement Committee</strong>
          </li>
          <li>
            Headed our <strong>Mobilizers program</strong>
          </li>
          <li>
            <strong>Led outreach to members</strong> during COVID-19
          </li>
          <li>
            Organized <strong>distributed Bernie canvasses</strong>
          </li>
          <li>
            Put on{" "}
            <strong>
              organizer trainings, socials, and non-voting general meetings
            </strong>
          </li>
          <li>
            Ensured the{" "}
            <strong>smooth functioning of emails and phone banks</strong> on the
            Operations Committee
          </li>
          <li>
            Built our <strong>chapter newsletter</strong>
          </li>
          <li>
            <strong>Marched, canvassed, and walked picket lines</strong>
          </li>
        </ul>
        <p>
          Bernie’s 2020 campaign has ended. Millions are newly unemployed and
          uninsured. Bosses are demanding workers, especially Black, Latinx, and
          women workers, risk their lives for profit. But{" "}
          <strong>workers are organizing</strong>. We have to join the fight,{" "}
          <strong>
            put forward a program against austerity, and rally the Bernie
            movement around these struggles
          </strong>
          .
        </p>

        <p>
          We also need to{" "}
          <strong>
            expand our Mobilizers program to activate all our members and
            supporters as political leaders and organizers in their workplaces
            and neighborhoods
          </strong>
          .
        </p>

        <p>
          DSA should become an instrument of class struggle in the hands of
          workers.{" "}
          <strong>
            We build this militancy through democracy, and democracy through
            organizing.
          </strong>
        </p>

        <p>
          I’m running for Recording Secretary on the Bread &amp; Roses slate
          because I want to{" "}
          <strong>
            strengthen our chapter’s democracy and address the low turnout at
            general meetings and our lack of diversity through applying
            organizing principles
          </strong>{" "}
          to the administrative functions of the office. Specifically, I will:
        </p>

        <ul>
          <li>Make meeting minutes exciting and relevant</li>
          <li>
            Help members understand the context of the decisions facing our
            organization
          </li>
          <li>
            Increase turnout to general meetings through phone banks and chapter
            media
          </li>
          <li>
            Make our democratic procedures accessible to all members and the
            broader multiracial working class
          </li>
        </ul>
      </>
    ),
  },
  {
    name: "Miguel Barretto",
    position: "At-Large",
    bio: (
      <>
        <p>
          Bernie’s campaign was key to my political activation. It finally felt
          like there was a candidate who directly spoke to the issues I grew up
          dealing with but felt guilty or ashamed for vocalizing. In my youth, I
          lacked health insurance and can attest to the dread of having a
          medical condition affecting my entire family. DSA took that sentiment
          and turned it into action. I’m running to be an At-Large member on the
          Steering Committee with the Bread &amp; Roses slate because I want to
          expand and develop diversity in our organization and build connections
          to the multiracial working class to fight for policies like Medicare
          for All.
        </p>
        <p>
          I joined DSA late last year, looking to enact change rather than sit
          on the sidelines and began work with the DSA for Bernie Campaign.
          Thinking I would only work behind the scenes, I began traveling from
          my home in Hayward to attend the canvasses DSA was organizing. Shortly
          after, I began serving as Co-Chair of the 2020 Committee, despite
          never having done anything like that previously. After encountering
          people at countless doors, I’ve learned there is an enormous hunger
          for the policies that Bernie platformed among the working class across
          the country.
        </p>
        <p>
          I know that these policies are to the benefit of the multiracial
          working class rather than the elite few, and for that reason it will
          be a tough road ahead. However, like any challenge, we can accomplish
          it when we act as one, standing in solidarity. I’ve seen a
          transformation within myself and strive to see that same change take
          place in everyone fighting for a better world. And I'm proud that in
          just a few months, I went from being a new member with very little
          organizing experience to now Co-Chair of the 2020 Committee helping to
          lead and organize.
        </p>
      </>
    ),
  },
  {
    name: "Annika Bastacky",
    position: "At-Large",
    bio: (
      <>
        <p>
          I'm a current At-Large Steering Committee member and a leader of our
          chapter's Design Working Group, and I'm proud to be running with the
          Bread &amp; Roses slate for reelection. I've been organizing in East
          Bay DSA since 2017, and I've helped organize both external and
          internal projects, such as:
        </p>

        <ul>
          <li>AHS Solidarity communications</li>
          <li>Bernie art builds</li>
          <li>Bernie canvasses</li>
          <li>The Jovanka Beckles campaign</li>
          <li>Canva trainings</li>
          <li>The Design Working Group</li>
          <li>The pilot Mobilizer program </li>
        </ul>

        <p>
          This coming year will be critical for building the mass character and
          political analysis of the socialist movement, so it’s capable of
          waging class struggle on a larger scale, and eventually cohering an
          independent worker's party. Now is the time to act strategically to
          advance our politics, develop stronger ties with (and within) the
          labor movement, and bring Bernie activists into the fold as committed
          organizers and lifelong socialists.{" "}
        </p>

        <p>
          We should focus on external-facing work that diversifies and more
          deeply unites the socialist movement with the labor movement. Let’s
          continue building collaborative relationships with rank-and-file union
          members in AHS, OEA, ATU 192, and other unions through strategic
          campaigns that grow our collective power to win. Because we know that
          unions are centers of working-class power and that politics is forged
          in struggle, let’s build a rank-and-file pipeline in our chapter, and
          support members’ organizing in the workplace.
        </p>

        <p>
          In the wake of our chapter's successful and vibrant Bernie campaign,
          it's incumbent on us to focus our resources on growing our
          communications platforms and political education capacities. Let’s
          celebrate the successes of the campaign, and continue drawing more
          people to our politics through beautiful socialist propaganda and
          strategic organizing.{" "}
        </p>

        <p>
          The fight for socialism is a lifelong struggle, and I’d be honored to
          serve on this year’s Steering Committee to help steer our organization
          into the next chapter in that struggle. Solidarity!
        </p>
      </>
    ),
  },
  {
    name: "Miguel Duarte",
    position: "At-Large",
    bio: (
      <>
        <p>
          I'm running for an At-Large position on the Steering Committee with
          the Bread &amp; Roses slate. I joined DSA in 2017 and am currently a
          Co-Chair of the Political Education Committee.
        </p>

        <p>
          Over the years, I have done everything from mobilizing new members to
          knocking doors for the Jovanka Beckles for AD-15 and statewide rent
          control campaigns. Last year, I was a founding Co-Chair of the Racial
          Solidarity Committee and the PG&amp;E / Green New Deal Campaign.
        </p>

        <p>I cherish our chapter as an organizing project in itself.</p>

        <p>
          <strong>
            I'm running because I want to help build on the success of our
            political education program and support our chapter's internal
            democracy.
          </strong>
        </p>

        <p>
          We face critical new challenges. Coronavirus has tanked the economy
          and upended the political status quo, creating both new opportunities
          and new threats. We must demand that worker safety and health is
          prioritized above all else.
        </p>

        <p>
          <strong>
            Political education is vital to our growth as organizers
          </strong>{" "}
          in DSA, in our unions, and in our communities. The day-to-day informs
          our politics, but to go to the next level, to organize and fight back,
          we need to study.
        </p>

        <p>
          In the coming year, I hope to help develop more introductory
          agitational content to continue bringing new people into the
          organization, and help develop intermediate and advanced education
          modules to support experienced members in deepening and broadening
          their knowledge.
        </p>

        <p>
          The path forward is uncertain, but we know successful class struggle
          relies on respectful and honest debate, discussion, and study.{" "}
          <strong>We must strengthen our chapter’s democracy</strong> and help
          members connect with the political life of the chapter at all levels.{" "}
          <strong>
            We must also redouble our recruitment efforts and diversify our
            membership.
          </strong>
        </p>

        <p>
          I'm proud of our chapter's ability to balance theory and practice, and
          I hope to build on this tradition moving forward as an At-Large member
          of our Steering Committee.
        </p>
      </>
    ),
  },
  {
    name: "Katy Scott-Smith",
    position: "At-Large",
    bio: (
      <>
        <p>
          I’m running for At-Large on the Bread &amp; Roses slate in order to
          lead based on a strategy of mass movement building. In early 2019, I
          began work on our chapter’s Bernie campaign.{" "}
          <strong>
            I led the Big Canvass Team and trained dozens of new organizers.
          </strong>{" "}
          I’m currently a Co-Chair of the 2020 Committee (Electoral Committee),
          and a member of the Endorsements Subcommittee. Prior to the Bernie
          campaign,{" "}
          <strong>I helped to write the “Let’s Own PG&amp;E” website</strong>,
          and worked on the 2018 Jovanka Beckles and statewide rent control
          campaigns. Outside of DSA, I work as a State employee to regulate
          insurance companies, where I’m a steward in my union. I live in
          Oakland and am a proud lesbian.
        </p>
        <p>
          This coming year will be a challenge for our chapter and for the world
          at large. COVID-19 is exacerbating the preexisting structural
          inequalities in our system. Due to these conditions workers are
          fighting back, so{" "}
          <strong>we must prioritize supporting worker militancy</strong>. We
          should do this through embedding socialists in the rank and file, and
          through external support for labor actions (such as strike support
          campaigns, and the Emergency Workplace Organizing Committee). At the
          same time, we need to campaign for class-struggle candidates who will
          amplify workers’ struggles, and push for policies that materially aid
          the working class.
        </p>
        <p>
          We should remain an externally focused organization that is committed
          to diversifying our socialist movement and rooting it in the
          multiracial working class. Our chapter brought in hundreds of new
          activists through our Bernie campaign, and reached tens of thousands
          of people in the East Bay.{" "}
          <strong>
            We should help these new activists develop, and work to bring in
            those who we reached through canvassing
          </strong>
          . I will aim to make sure our chapter is a welcoming space — one which
          prioritizes mentorship of organizers, political education, and
          comradely political debate.
        </p>{" "}
      </>
    ),
  },
  {
    name: "Luke Thibault",
    position: "At-Large",
    bio: (
      <>
        <p>
          I am a proud democratic socialist. I believe that the road to
          socialism is a democratic one that brings together the vast
          working-class majority into open struggle against the capitalist
          class. This requires struggles for state power with working-class
          demands and mass politics. It requires building a militant, left-wing,
          and democratic labor movement. And it requires that we orient our
          politics to those who are not yet class conscious.
        </p>

        <p>
          My experiences with East Bay DSA over the past few years — the Jovanka
          Beckles assembly race, the Oakland teachers strike, and the Bernie
          campaign — have shown me that strategic campaigns require an effective
          organization with clear priorities. Our chapter is capable of
          incredible things when we pool our resources into truly collective
          action, and prioritize work that has broad consensus. The same has
          been true in my experience on the national Medicare for All campaign
          Steering Committee, supporting other chapters across the country. If
          elected, I intend to lead with this perspective.
        </p>

        <p>
          Outside of DSA, I work for a union that represents public sector
          workers across the Bay Area, and their fights for health and safety
          during this pandemic demonstrate the importance of the rank-and-file
          strategy. As a gay man, I know that there is no social justice without
          economic justice, and that fighting oppression requires class unity
          around classwide demands.
        </p>

        <p>
          I am running for At-Large on the Bread &amp; Roses slate because I
          believe that we must continue building our chapter’s power through
          class-struggle campaigns, the rank-and-file strategy, and strong
          internal democracy. And because we must lay the groundwork for what we
          need to eventually win democratic socialism: a mass independent party
          of the working class. As a member of the Political Education
          Committee, I am excited to build up our Night School program with more
          advanced classes.
        </p>
      </>
    ),
  },
]

class Candidates2020 extends React.Component {
  state = { visible: false, candidate: null, groupedCandidates: [] }

  componentDidMount() {
    this.setState({
      groupedCandidates: this.getGroupedCandidates(),
    })
  }

  showModal = candidate => {
    this.setState({
      visible: true,
      candidate: candidate,
    })
  }

  handleCancel = e => {
    this.setState({
      visible: false,
    })
  }

  images = () => this.props.data.allFile.edges.map(edge => edge.node)

  image = candidate => {
    const name = candidate.name
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/\./g, "")
    return this.images().find(image => image.name === name).childImageSharp
      .fluid
  }

  getGroupedCandidates = () => {
    const positions = []
    const groups = []
    candidates.forEach(candidate => {
      if (!positions.includes(candidate.position)) {
        positions.push(candidate.position)
        groups.push({ position: candidate.position, candidates: [] })
      }
      groups[groups.length - 1].candidates.push(candidate)
    })

    // shuffle candidates within each group
    for (let i = 0; i < groups.length; i++) {
      groups[i].candidates = shuffle(groups[i].candidates)
    }

    return groups
  }

  render() {
    return (
      <Layout
        title="2020 Steering Committee Candidates"
        color="red"
        heroImageName="index"
        layoutClassName="home"
      >
        <SEO
          title="East Bay DSA 2020 Steering Committee Candidates"
          ogImage="home"
        />

        <div className="content-column content-column-candidates">
          <Element name="candidates" id="candidates">
            <h2>Meet the Candidates</h2>
          </Element>

          <div className="candidate-cards">
            {this.state.groupedCandidates.map(group => (
              <div className="position" key={group.position}>
                <h3>{group.position}</h3>
                {group.candidates.map((candidate, index) => (
                  <div
                    className="candidate-card"
                    onClick={() => this.showModal(candidate)}
                    onKeyPress={() => this.showModal(candidate)}
                    key={candidate.name}
                    role="button"
                    tabIndex={index}
                  >
                    <CandidatePhoto
                      img={this.image(candidate)}
                      alt={candidate.name}
                    />
                    <div className="candidate-card__content">
                      <h3>{candidate.name}</h3>
                      <Button>Read more&hellip;</Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="content-column">
          <Element name="priorities" id="priorities">
            <h2>Vote May 17–23!</h2>
            <p>Check your inbox for details from our chapter leadership.</p>
            <h2>Hear from us at the Candidate Forum!</h2>
            <p>
              <strong>Steering Committee Candidate Forum</strong>
              : May 16th 1:00PM-3:30PM
              <br />
              <Button style={{ marginTop: 10 }}>
                <ExternalLink href="https://www.eastbaydsa.org/events/1288/2020-05-16-may-general-meeting-and-steering-committee-candidate-forum/">
                  RSVP Here
                </ExternalLink>
              </Button>
            </p>

            <MailChimpSignUp />

            <p>
              Our chapter’s Bernie campaign led the way to Bernie’s victory in
              the East Bay, brought in new leaders, developed new tactics, and
              proved that democratic socialism can rally the multiracial working
              class.
            </p>

            <p>
              Since Bernie’s California victory, things have drastically changed
              and we’re now in the middle of a global pandemic and economic
              depression. The powerful are pushing an agenda of privatization
              and corporate bailouts on the one hand and blaming and oppressing
              immigrants and people of color on the other while millions of
              working-class people will die from lack of healthcare.
            </p>

            <p>
              But the working class is fighting back! Frontline workers are
              organizing for better protections and hazard pay, and tenants are
              withholding rent. Bernie’s campaign inspired millions and the
              COVID-19 crisis has radicalized millions more.{" "}
              <strong>
                Our task is to merge these into a single, multiracial,
                working-class movement against racism and oppression and for
                democratic socialism.
              </strong>
            </p>

            <h2>1. Rank-and-File Worker Power!</h2>
            <p>
              We should rebuild a militant, democratic, and left-wing labor
              movement by developing rank-and-file worker-leaders permanently
              organizing in the workplace.
            </p>

            <ul>
              <li>
                <strong>
                  Build a rank-and-file jobs pipeline in our chapter
                </strong>
                , organizing ourselves into strategic industries, supporting
                graduating YDSA activists in getting rank-and-file jobs, and
                supporting members entering the labor movement
              </li>
              <li>
                <strong>
                  Support the{" "}
                  <ExternalLink href="https://jacobinmag.com/2020/04/united-electrical-workers-dsa-workplace-organizng-coronavirus/">
                    Emergency Worker Organizing Committee
                  </ExternalLink>{" "}
                  (EWOC)
                </strong>{" "}
                in helping workers organizing during COVID-19
              </li>
              <li>
                <strong>Continue local solidarity work</strong> alongside OEA
                teachers, SEIU 1021 healthcare workers, and AC Transit workers
                of ATU 192 and promote new organizing, like Tartine Union and
                others
              </li>
            </ul>
            <h2>2. Fight Racism and Oppression</h2>
            <p>
              Solidarity means{" "}
              <ExternalLink href="https://jacobinmag.com/2018/11/democratic-socialism-class-organizing-racism-sexism">
                uniting the multiracial working class
              </ExternalLink>{" "}
              against oppression and exploitation. We must demand universal
              programs that guarantee Black and Brown people housing, food,
              medical care, education, and the full fruits of their labor — and
              confront oppression by fighting to defend and expand reproductive
              rights, end housing and job discrimination, and win open borders
              and end deportations.
            </p>

            <ul>
              <li>
                <strong>Prioritize diversifying East Bay DSA</strong> by
                building YDSA chapters at community colleges, placing socialists
                in rank-and-file jobs alongside the multiracial working class,
                and recruiting from our Bernie contacts
              </li>
              <li>
                <strong>
                  Build campaigns to tackle capitalist racism head-on
                </strong>
                , like our Classroom Justice Campaign against school closures
                and our AHS Solidarity campaign
              </li>
              <li>
                <strong>
                  Build the strength of labor{" "}
                  <ExternalLink href="https://jacobinmag.com/2019/01/los-angeles-teachers-strike-antiracism-unions">
                    to win anti-racist demands
                  </ExternalLink>
                </strong>{" "}
                and protect frontline workers
              </li>
              <li>
                <strong>Integrate anti-oppression politics</strong> into all our
                campaigns, communications, and political education
              </li>
            </ul>
            <h2>3. Fight Austerity and Privatization</h2>
            <p>
              As a depression economy takes hold, we can expect a wave of
              corporate bailouts, budget cuts, and privatizations, even as a
              lack of strong public programs cost lives before COVID-19. Only an
              organized movement alongside our allies in public sector unions
              can reverse this destruction of the public good.
            </p>

            <ul>
              <li>
                <strong>Fight budget cuts</strong> in Oakland Unified School
                District and the Alameda Health System
              </li>
              <li>
                <strong>
                  Win{" "}
                  <ExternalLink href="https://www.schoolsandcommunitiesfirst.org/">
                    Schools and Communities First
                  </ExternalLink>
                </strong>{" "}
                in November
              </li>
              <li>
                <strong>Develop local strategic campaigns</strong> against
                austerity and privatization
              </li>
              <li>
                <strong>
                  Organize tenants and the unemployed and underemployed
                </strong>{" "}
                against landlords and billionaires and leverage their power to
                demand rent forgiveness, eviction moratoriums, fully-funded
                universal social programs, and a jobs guarantee with a living
                wage
              </li>
            </ul>
            <h2>4. Message Towards the Masses</h2>
            <p>
              Through our communications and political education, we need to win
              Bernie supporters and rank-and-file workers to our long-term
              vision and get them involved in the socialist project.
            </p>

            <ul>
              <li>
                <strong>
                  Develop{" "}
                  <em>
                    <ExternalLink href="https://eastbaymajority.com/">
                      Majority
                    </ExternalLink>
                  </em>{" "}
                  into a powerhouse
                </strong>{" "}
                that competes with local media and reaches a broader audience
              </li>
              <li>
                <strong>
                  Expand our capacity for investigative journalism and
                  multimedia
                </strong>{" "}
                and creating more social media shareables
              </li>
              <li>
                <strong>Earn press coverage</strong> for our campaigns and
                actions
              </li>
              <li>
                Expand our Socialist Night School programming to include panel
                discussions and advanced programming and emphasize highlighting
                international perspectives
              </li>
            </ul>
            <h2>5. Build a Multiracial, Democratic DSA</h2>
            <p>
              We need a mass organization that can carry out the mass politics
              we believe in. Bernie’s campaign demonstrated that democratic
              socialism can mobilize the multiracial working class, but East Bay
              DSA’s composition doesn’t reflect that. Growing DSA also requires
              us to make our chapter more democratic and give members control
              over substantive decisions.
            </p>

            <ul>
              <li>
                <strong>Launch a recruitment campaign</strong>, specifically to
                diversify the chapter.
              </li>
              <li>
                <strong>
                  Expand our Spanish-speaking capacities and multilingual
                  materials
                </strong>{" "}
                to reach a broader audience.
              </li>
              <li>
                <strong>Build leadership development engines</strong> that
                promote the development of non-white and non-male leaders.
              </li>
              <li>
                <strong>Expand our mobilizers program</strong> to check on our
                members and contacts during COVID-19, plug them into campaigns
                and political education, and activate them as socialist
                organizers while continuing our organizer trainings.
              </li>
              <li>
                <strong>Take an organizing approach to our democracy</strong> by
                actively turning out members to General Meetings and looping
                them into debates.
              </li>
            </ul>
            <h2>6. Bigger than Bernie</h2>
            <p>
              Over 2 million Californians voted for Bernie in 2020. Through
              DSA’s Bernie campaign we spoke to over five thousand Bernie
              supporters throughout the East Bay and hundreds have joined DSA
              since Bernie suspended his campaign. For those inspired by that
              campaign, who fought for someone they didn’t know, DSA is their
              political home. Our job is to welcome them home.
            </p>

            <ul>
              <li>
                <strong>Unite Bernie supporters</strong> by adopting{" "}
                <ExternalLink href="https://bernie.dsausa.org/issues">
                  Bernie's platform
                </ExternalLink>{" "}
                as DSA’s and encouraging partner organizations to co-sign this
                platform.
              </li>
              <li>
                <strong>Recruit Bernie activists and supporters</strong> we
                identified through the campaign into DSA.
              </li>
              <li>
                <strong>
                  Develop a roadmap to form an{" "}
                  <ExternalLink href="https://www.jacobinmag.com/2016/12/socialist-party-bernie-sanders-labor-capitalism/">
                    independent working-class party
                  </ExternalLink>
                </strong>{" "}
                in partnership with Bernie coalition organizations.
              </li>
              <li>
                <strong>Recruit DSA members and allies</strong> to run for
                office in 2022.
              </li>
            </ul>
          </Element>
        </div>

        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          {this.state.candidate && (
            <>
              <h2>{this.state.candidate.name}</h2>
              <h3>{this.state.candidate.position}</h3>
              <CandidatePhoto
                img={this.image(this.state.candidate)}
                alt={this.state.candidate.name}
              />
              {this.state.candidate.bio}
            </>
          )}
        </Modal>
      </Layout>
    )
  }
}

const CandidatePhoto = ({ img, alt }) => (
  <Img className="candidate-photo" fluid={img} alt={alt} />
)

export const query = graphql`
  query Convention2020HeadshotsQuery {
    allFile(
      filter: { absolutePath: { glob: "**/headshots/convention-2020/*" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    }
  }
`

export default Candidates2020
