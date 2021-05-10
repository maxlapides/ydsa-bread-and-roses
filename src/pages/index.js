import React from "react"
import { Element } from "react-scroll"
import { Modal, Button } from "antd"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
// import MailChimpSignUp from "../components/mailchimp-sign-up"

const candidates = [
  {
    name: "Labiba Chowdhury",
    school: "CCNY",
    position: "Co-Chair",
    bio: (
      <>
        <p>
          Hi there! I’m running for co-chair of YDSA and attend City College in
          New York City. I am the daughter of working-class Bangladeshi
          immigrants and was born and raised in Queens, New York. I was first
          radicalized by seeing the disparity in quality of life when my family
          visited Bangladesh. In the Bangladeshi capital Dhaka, the second your
          car leaves the driveway and enters the street, you’re surrounded by
          begging children and families.
        </p>
        <p>
          Ten-year-old me didn’t know what capitalism or socialism were, but I
          dreamed of masses of people uniting together to force billionaires
          like Bill Gates to share their wealth with the rest of us. However, it
          was some time before I was able to articulate these thoughts as
          socialist politics. Growing up Muslim in New York City made me afraid
          to search “Socialism” on Google, out of fear of the government
          surveilance. It was overwhelming knowing capitalism was the root of
          all the problems my friends, family, and I faced, while not knowing
          how we could begin to overcome it without putting ourselves at further
          risk!
        </p>

        <p>
          I decided to attend City College because it was a public college that
          was affordable for working-class students like me. When I saw the
          flyers for YDSA it felt like my whole life had led up to that moment.
          A national, mass organization with tens of thousands of members
          fighting for a better world?! Sign me up and brand me forever! I have
          given this organization everything for that reason. I have served on
          the organizing committee of City College YDSA for the past year and
          represented NYC YDSA chapters on the NYC DSA steering committee from
          June 2019 to March 2020.
        </p>
        <p>
          I trained student organizers and grew the number of YDSA chapters in
          New York City from 2 to 9. I took advantage of the opportunities
          presented by Bernie’s campaign to YDSA chapters specifically in CUNY
          schools. These groups would be direct pipelines for working class
          students to take on leadership roles in DSA and our movement. I am
          currently the Deputy Campaign Manager for Marcela Mitaynes, a DSA
          endorsed candidate for state assembly in Brooklyn, New York. Working
          on an electoral campaign in the middle of COVID and mass unrest has
          given me firsthand experience dealing with challenges we’ve never
          faced before as an organization, and I want to apply all that I’ve
          learned about digital organizing through this campaign - base
          building, comms, fundraising, leadership development, and more - to
          help grow YDSA.
        </p>

        <p>
          I am running for co-chair of YDSA because I want to help build YDSA
          into a pipeline for creating lifelong socialist organizers who are
          reflective of the multiracial working class. However, to achieve our
          long term goals of abolishing capitalism and building socialism, we
          need to recognize our power and place in this project as student
          organizers.
        </p>

        <p>
          Through my experiences on the national College for All, Green New
          Deal, Growth and Diversification committees, it is clear to me that
          YDSA is stretched too thin. We need to focus on and prioritize
          political education and campaign work that will sharpen the organizing
          skills of our members and build our capacity. As socialists we know
          that labor is central to how we build power and win.
        </p>

        <p>
          As we develop lifelong socialist organizers, it is also crucial that
          we build a rank-and-file strategy pipeline to funnel our organizers
          into strategic unions and build economic, social, and political power
          for the working class from the bottom-up. Personally, that is why I am
          going to become a train conductor and join the Transit Workers Union
          in New York City after graduating.
        </p>

        <p>
          We also need to build pipelines into working-class communities for
          membership and leadership in the short term. I want to help grow our
          organization and build chapters in community colleges, HBCUs, and high
          schools. We need to recruit and develop leaders in black and brown
          working class communities to continue building the mass, multi-racial
          working-class movement that is necessary for us to win a better world.
        </p>

        <p>
          I look forward to the discussions and debates at this convention! See
          ya in Zoom!
        </p>
      </>
    ),
  },
  {
    name: "Neah Havens",
    school: "WWU",
    position: "Co-Chair",
    bio: (
      <>
        <p>
          I’m a 21 year old student at Western Washington University studying
          Political Science and Women, Gender, Sexuality Studies, a future
          elementary school teacher, and the co-chair of WWU YDSA. My activism
          is rooted in a conviction that winning socialism requires a mass
          working-class movement.
        </p>
        <p>
          My organizing experience began in 2017, when I began volunteering with
          my local Planned Parenthood. While I still believe that work to be
          important, I found it to be very single-issue focused, and I felt that
          it was lacking the larger movement to be successful. In 2018, a friend
          brought me to a Seattle DSA event, and soon after that I joined
          Whatcom County DSA, where I began to understand what it meant to be a
          part of a collective project and drew the connection between
          capitalism and our everyday lives.
        </p>

        <p>
          In April 2019 a comrade and I founded WWU YDSA, and since then we have
          grown to one of the most active political groups on campus. The Chanan
          Suarez campaign for Bellingham City Council really pushed me to the
          forefront of local politics and I’m so grateful to my comrades who
          elected me as the Chair of the Electoral Committee. Interacting with
          people all over the city, from the wealthy to the working class gave
          me insight into how DSA could really make a difference in people’s
          lives.
        </p>
        <p>
          My commitment to labor organizing and the worker’s movement is
          something that has deeply influenced my life. I got involved mostly
          through WWU YDSA and supporting campus workers through the ongoing
          effort to get Aramark off our campus. Watching and supporting
          worker-led movements such as the Seattle teacher’s strike in 2015 to
          the Swedish Hospital nurse’s strike in February, has made even more
          clear to me that rank-and-file strategy is necessary. We need to
          rebuild the once strong American and international labor movement, and
          I think YDSA has the tools to do it.
        </p>

        <p>
          I’m running for co-chair of YDSA because I think we need to take
          advantage of this precarious moment in history and use it to build a
          powerful mass movement as young people, and as workers. Our generation
          has watched as capitalism has become an incredibly unfair and
          oppressive force. By continuing to build the larger working-class
          movement that Bernie Sanders started, we can start to create a world
          that is beneficial to everyone.
        </p>
      </>
    ),
  },
  {
    name: "Emmaline Bennett",
    school: "Columbia-Barnard",
    position: "At-Large",
    bio: (
      <>
        <p>
          I’m a 22-year-old student at Columbia University Teachers College,
          studying to become a history teacher. I became a socialist eight years
          ago, radicalizing around issues of economic inequality and
          anti-imperialist organizing. In high school, as I read more about
          socialist theory and history, I began to understand how so many of the
          problems we’re facing today—from deepening class inequality to climate
          crisis to militarism to mass incarceration to repression of refugees
          and undocumented immigrants—were all linked to capitalism, its valuing
          of profit over human life, and its denial of any true form of freedom,
          democracy, or self-determination to the vast majority of people.
        </p>
        <p>
          As soon as I entered college, I joined the Barnard-Columbia
          Socialists, then a branch of the International Socialist Organization.
          It was a transformative experience, giving me the opportunity to work
          alongside some of the most committed socialist organizers in New York
          City. Through political education, I built on my earlier
          anti-capitalist conclusions to come to the recognition that the
          international, multiracial working class is the key agent capable of
          overthrowing the existing system and transforming society for the
          better. Around that time I decided that I wanted to dedicate my life
          to building the socialist movement, and doing everything I could to
          bring that transformation about.
        </p>

        <p>
          For the next two years, I was on the elected leadership of the
          Barnard-Columbia Socialists, helping to grow our membership,
          facilitate our political education groups, and lead our campaign work.
          One of the most transformative experiences for me was helping to build
          solidarity with the 2018 graduate workers' strike, which took place at
          the same time as the massive teachers' strike wave across the country.
          It felt like we were really part of a broad-based, rank-and-file
          movement to re-invest in public education and decommodify higher
          education—an experience which informed my later decision to pursue
          rank-and-file strategy after graduation.
        </p>
        <p>
          When the ISO dissolved in 2019, I joined DSA immediately, and soon
          became involved in efforts to start up a YDSA chapter at Columbia. It
          was exciting to become part of a socialist organization which had
          grown so rapidly in the past few years, and to get plugged into all
          the organizing work that DSA comrades were doing throughout New York
          City.
        </p>

        <p>
          The following semester, I was elected to the Organizing Committee of
          the new Columbia-Barnard YDSA chapter. With the help of other comrades
          in the chapter, I learned more about the kinds of relational,
          one-on-one organizing strategies that are so necessary for
          revitalizing the labor and socialist movements. Through our DSA for
          Bernie canvasses, we talked to students as well as members of the
          surrounding working-class communities about demands like College for
          All, Medicare for All, and a Green New Deal, connecting all of these
          things to our broader vision for socialist transformation. The
          following semester, we continued this electoral work, and also started
          up a campaign in solidarity with the graduate workers' strike. When
          COVID-19 hit, we ramped up our organizing efforts, intervening in
          struggles around housing, tuition, campus labor, and the citywide rent
          strike.
        </p>

        <p>
          All of these experiences organizing alongside comrades at Columbia
          have convinced me of the key role that YDSA has to play in rebuilding
          the socialist movement. As college students, we're at a formative
          period in our lives, potentially receptive to socialist ideas and open
          to getting involved in organizing. As YDSA members, I think that the
          most important task in front of us is to create as many spaces for
          socialist political education around the country as possible&mdash;and
          by "political education," I mean in the broadest sense of not only
          discussing theory, politics, and history with comrades (although this
          is critically important), but also engaging in the kinds of campaigns
          that will give members the confidence and skills necessary to become
          lifelong socialist organizers.
        </p>

        <p>
          With this aim in mind, I think that YDSA, at the national level,
          should develop a more robust political education program, launch a
          coordinated anti-austerity campaign that links local to national
          demands, and recommit itself to the rank-and-file strategy. I think
          that the first two tasks are key to drawing as many people into our
          movement as possible, and giving those members the education and
          experience they need to become organizers in the long term. Meanwhile,
          the rank-and-file strategy, I believe, is key to our overall vision of
          re-integrating the labor movement and the socialist tradition, and
          using the organized power of the working class to transform society.
        </p>

        <p>
          Thank you for considering me as an NCC candidate, and I'm excited to
          continue being part of this movement with all of you.
        </p>
      </>
    ),
  },
  {
    name: "Cerena Ermitanio",
    school: "UT Austin",
    position: "At-Large",
    bio: (
      <>
        <p>
          I’m a 20-year-old undergraduate student at the University of Texas at
          Austin studying International Relations and a current member of UT
          Austin YDSA's Steering Committee and Austin DSA's Leadership
          Committee. As a democratic socialist, I firmly believe that winning a
          better world means organizing a multiracial, multi-gendered, and
          multigenerational working-class movement to take on the oppressive
          systems built by and for the capitalist class.
        </p>
        <p>
          After growing disenchanted with progressive social justice activism,
          which tiptoed around the issue of capitalism, I joined my university's
          YDSA chapter and Austin DSA. I found my political home through UT
          YDSA's efforts to put fossil fuel and military divestment at the
          center of student activism and Austin DSA's Homes not Handcuffs
          campaign. However, it was canvassing for the campaigns of Heidi Sloan
          and Bernie Sanders that cemented my belief in democratic socialism,
          and helped me realize the importance of strengthening the labor
          movement and participating in class struggle elections in order to
          raise class consciousness.
        </p>

        <p>
          With Bernie no longer campaigning and a looming economic depression in
          the midst of COVID-19, the future feels uncertain for many of us. In
          spite of this uncertainty, college students are organizing for tuition
          refunds, housing, and protections for university workers. These fights
          are very much connected to decommodifying and democratizing our
          universities. Furthermore, violence waged against black and brown
          people&mdash;including protests calling for the end of
          policing&mdash;by the hands of police have spurred calls by students
          for defunding police on campuses across the nation and refund services
          for students as a step towards making our universities accessible for
          students of all backgrounds and abilities.
        </p>
        <p>
          I am running for NCC with the recognition that while these fights
          against capital take on different forms, they all must be centered on
          building a movement that recognizes itself as working class in order
          to fight oppressions of all kinds. Additionally, with the Bernie
          campaign’s success in allowing students to articulate just
          alternatives to capitalism, YDSA has an important role in carrying
          Bernie’s torch through mass campaigns that articulate the centrality
          of organizing the working class.
        </p>

        <p>
          While there is much uncertainty in the air, it is undeniable that
          capitalism is the center of our suffering, and that it is up to us to
          win the world that we seek as socialists.
        </p>
      </>
    ),
  },
  {
    name: "Nickan Fayyazi",
    school: "UC Berkeley",
    position: "At-Large",
    bio: (
      <>
        <p>
          I am a 20-year-old student at UC Berkeley studying Engineering
          Mathematics and Statistics, and am the co-chair of Cal YDSA. I am
          nonbinary and use they/them or she/her pronouns. I am a
          second-generation immigrant of Iranian and Azeri-Iranian background.
        </p>
        <p>
          As an Iranian, my life has always been politicized. I identified as a
          socialist and was an anti-imperialist from a young age, but it wasn’t
          until the 2016 Bernie Sanders campaign that I was motivated to become
          a socialist organizer. Going through this trajectory, one that
          countless others have as well, helped me realize the importance of a
          class-struggle electoral strategy. Millions of people—predominantly
          young, working-class, and of color—were radicalized by the two Bernie
          campaigns and are now in a position to be brought into a socialist
          movement whose strength is unprecedented in recent American history.
          DSA’s engagement with this class struggle campaign has given socialist
          organizers an unprecedented opportunity to develop a mass movement of
          the multiracial working class, but our work has only just begun.
        </p>

        <p>
          After I began attending UC Berkeley, I joined the campus YDSA chapter
          and East Bay DSA. In these past years, I’ve participated in
          class-struggle electoral campaigns such as the 2020 Bernie Sanders
          presidential campaign and the 2018 Jovanka Beckles state assembly
          campaign; labor actions such as the AFSCME and UPTE strike of UC
          workers and the OEA teachers’ strike in 2019; and political education
          through our chapter reading group and a labor history discussion group
          formed with a group of YDSA comrades throughout the East Bay.
          Currently, I’m working on the Alameda Health System county takeover
          campaign, the Jovanka Beckles for AC Transit campaign, and the No
          Shortcuts reading group at both the UC and national level.
        </p>
        <p>
          These experiences, each teaching me in its own way, have shaped my
          development as an organizer and have led me to a deeper understanding
          of what it takes to advance the socialist movement and build working
          class power. The significant concessions won by Oakland teachers, who
          worked to build a militant union that went on strike for the first
          time in decades, and the inspiring work being taken up by local
          comrades such as healthcare workers in SEIU 1021 and student workers
          in UAW 2865, showed me the importance of pursuing a rank-and-file
          strategy that will both strengthen the labor movement and redevelop
          the left-labor link. As students who are set to enter the workforce in
          the coming years, YDSA members have an integral role to play in the
          rank-and-file strategy, and it is important that our commitment to it
          as an organization remains strong.
        </p>

        <p>
          Beyond my organizing experiences, my life experience, too, has shaped
          my values. As a person of color, I know first-hand the need for
          anti-racism to be a core component of socialist organizing, and the
          broader need to bring communities of color—which, being
          disproportionately working-class, collectively suffer the impacts of
          both racism and classism—into an organization that remains
          disproportionately white and inaccessible to many socialists of color.
          The youth of this country are its most diverse cohort; YDSA must
          recognize this and take the initiative to work toward this goal on
          multiple levels—through intentional recruitment and expansion of
          chapters in high schools, community colleges, and HBCUs, as well as
          through a definitive commitment to anti-racist organizing.
        </p>

        <p>
          These convictions are the same ones that have led me to run for NCC. I
          want to see YDSA take an active role in labor work, class struggle
          electoral campaigns, and anti-racist work. I want to see YDSA grow
          into an even stronger force than it is today, leading a revitalized
          youth movement that will become the broader mass multiracial
          working-class movement of the future.
        </p>
      </>
    ),
  },
  {
    name: "Griffin Mahon",
    school: "University of Virginia",
    position: "At-Large",
    bio: (
      <>
        <p>
          I’m a 24-year-old history student at the University of Virginia, where
          I transferred last year. During the last year I was the Vice Chair of
          our YDSA chapter.
        </p>
        <p>
          I joined DSA after the inauguration in 2017. My first instinct was to
          try to start a chapter where I lived, and a few weeks later I was
          sitting in a room full of strangers discussing the politics of
          Fredericksburg during the time of Trump. This first
          experience&mdash;which honestly didn’t require much effort&mdash;was
          incredibly exciting! Two Sanders campaigns and a series of social
          movements have proven that there is a base for socialist politics in
          the United States. But as recent strike actions and DSA’s electoral
          victories have also demonstrated, only organizing can combine people’s
          ideas and interests into power.
        </p>

        <p>
          When the COVID-19 pandemic began, I was asked to be on the steering
          committee tasked with handling DSA’s response to the emergency. As the
          committee’s YDSA representative, I and a team of volunteers tried to
          get in touch with all of our organization’s leaders. The process was
          an instructive learning experience: most never got back to us, and
          some had never even heard from the national office before.
        </p>
        <p>
          The ongoing mass protests against police brutality are a reminder that
          social movements can erupt unexpectedly. Without more internal
          coordination, YDSA’s ability to effectively intervene in moments like
          these will be limited. This coordination can only result from the NCC
          and chapters working on similar projects, which requires a shared
          understanding of what socialism means and how we fight for it.
        </p>

        <p>
          I believe socialism means the working class governing society and
          think everyone in YDSA should have the opportunity to participate in
          the transformative experience of democracy, of making thoughtful
          collective decisions. To self-govern we need to know what our
          political goals are and how we think we can achieve them, consider and
          evaluate different objectives and proposals with each other, and
          commit to building the socialist movement. For our members to
          experience democracy, we need political education on the history of
          the socialist movement in America and on the politics and economics of
          our society today. My belief in the importance of political education
          is why I’ve helped edit{" "}
          <ExternalLink href="https://y.dsausa.org/the-activist/">
            the Activist
          </ExternalLink>{" "}
          this year (write for us!). Everyone in YDSA should feel confident
          offering their opinions on the direction of our organization.
        </p>

        <p>
          I’m running for YDSA’s National Coordinating Committee because I want
          to help build a YDSA with a chapter on every campus in the country.
          And I think socialists should hold each other, especially our elected
          leaders, to a high standard&mdash;the standard of comrade&mdash;which
          I hope to meet.
        </p>
      </>
    ),
  },
  {
    name: "Dahlia Wilson",
    school: "Albany High School",
    position: "At-Large",
    bio: (
      <>
        <p>
          My name is Dahlia Wilson (they/them) and I am the co-chair of Albany
          High School YDSA. As a Marxist and and a feminist, I believe that the
          forces inherent to capitalism are fundamental barriers to a just
          world. The working class is locked in struggle with the capitalist
          class and the path to a society founded on solidarity, progress, and
          human flourishing must be paved with working class resistance.
        </p>
        <p>
          After becoming a socialist two years ago, I joined East Bay DSA,
          founded a YDSA at my high school, and committed myself to organizing
          class struggle campaigns in the East Bay. Through my participation in
          East Bay DSA’s Social Housing Committee and support for the Oakland
          teachers’ strike, I saw the power of militant organizing, coalition
          building, and a united multiracial working class. I learned what it
          means to be a comrade and to be bound to someone else by a shared
          commitment to the lifelong struggle for socialism.
        </p>

        <p>
          Our chapter at Albany High School is just one year old but we have
          already accomplished incredible things. We canvassed and phone banked
          weekly for Bernie Sanders, fostered political education and leadership
          development through a combination of chapter-wide discussions,
          targeted 1-on-1 organizing, and outward-facing events, and played an
          important role in organizing a regional group for YDSA organizers from
          across the East Bay to share skills, resources, and political
          strategy.
        </p>
        <p>
          I’m running for NCC because I want high-schoolers across the country
          to have the opportunities I had to grow as a socialist organizer.
          Young people today are facing a raw deal. We are growing up with the
          knowledge that we will be swamped in student debt for our lifetimes,
          forced to compete on a hostile job market marked by falling wages,
          plummeting rates of unionization, and a future cut short by the
          catastrophic effects of climate change. This is a profoundly
          radicalizing time to be a teenager. High school YDSAs have the unique
          opportunity to organize the students from a variety of backgrounds and
          offer them a solution rooted in solidarity and a material analysis:
          the shared fight for a world without capitalism.
        </p>

        <p>
          I believe that the rank-and-file strategy, which seeks to rebuild the
          militant core of the labor movement, is key to building worker power
          and winning a better world. By exposing high schoolers to radical
          labor organizing strategies, we can prepare students to organize their
          workplaces after graduation, building up worker-led, democratic unions
          wherever they go.
        </p>

        <p>
          We have a long struggle ahead of us but it is one that we can win by
          recognizing that our power lies in the multiracial working class,
          advancing a strategy to build that power through rank-and-file
          organizing and, as I think Bernie said best, fighting for someone we
          don’t know.
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

    return groups
  }

  render() {
    return (
      <Layout
        title="2021 YDSA Summer Convention"
        color="red"
        heroImageName="index"
        layoutClassName="home"
      >
        <SEO
          title="2021 YDSA Summer Convention Slate &amp; Resolutions"
          ogImage="home"
        />

        {/* <div className="content-column content-column-candidates">
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
                      <h4>{candidate.school}</h4>
                      <Button>Read more&hellip;</Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div> */}

        <div className="content-column">
          <p>
            A democratic socialist nearly won the Democratic presidential
            primary last year, earning the enthusiasm of students and workers
            everywhere. Then, the COVID-19 pandemic crashed into our privatized
            healthcare system and millions were laid off in its wake. Shortly
            after, massive and militant protests against police violence broke
            out in every state in the country. Donald Trump was defeated in
            November; however, the new Biden administration has done little more
            to stave off the spread of COVID, as the pandemic has continued to
            ravage working-class communities. Police continue to brutalize
            working-class communities, especially Black and Latinx communities,
            murdering adults and children alike. Even as more and more people in
            the U.S. receive vaccines, the U.S. ruling class is condemning
            billions of people in the Global South to languish from lack of
            access to vaccines. &lsquo;Back to normal&rsquo; for the US is still
            a neoliberal hellscape where millions of people lack basic rights
            like healthcare, housing, and education, where we are on a collision
            course for climate catastrophe, and where working-class people are
            denied any control over their own conditions of life and work.
          </p>
          <p>
            Since Bernie Sanders&rsquo;s 2016 campaign, DSA and YDSA have grown
            rapidly, bringing people all around the country together in the
            fight for socialism. We now have a ninety-two-thousand-member
            socialist organization and only keep growing. In YDSA, we have built
            a mass student-socialist organization through campaigns like College
            for All, YDSA for Bernie, the Student and Workers&rsquo; Relief
            campaign, and our campaign to Cancel All Student Debt. We&rsquo;ve
            also created a thriving publication, <i>The Activist</i>, political
            education curricula and programs, and a rank-and-file pipeline to
            educate and support student socialists in our efforts to rebuild the
            labor movement from the bottom up. YDSA now has over 130 chapters,
            all engaging in struggle from the local to national level and
            educating and training lifelong socialist organizers.
          </p>
          <p>
            <strong>
              YDSA should be the organization that students and young people
              look to and join to make sense of our moment and learn how to
              organize for a truly democratic society.
            </strong>{" "}
            And YDSA should be a launchpad for young socialists, preparing them
            to organize in DSA long after they finish school.
          </p>
          <p>
            But every year, some members of YDSA graduate. This high turnover
            demands more organizing support from national leadership and a
            shared strategy about how students can contribute to the class
            struggle.{" "}
            <strong>
              As Marxists, we believe that although students have an important
              role to play, only the working class can build socialism.
            </strong>
            Students as a group are transient and heterogenous, but the working
            class is an absolute majority and can fatally disrupt profit-making.
            While the majority of YDSA members are individually working-class,
            we are not representative of the working class&rsquo;s diversity and
            we remain largely separate from the labor movement.
          </p>
          <p>
            YDSA must work to elevate class consciousness on and around
            campuses, and bring students into struggles that will provide them
            with the knowledge and skills necessary to organize after
            graduation. Over the past year, YDSA has begun to build the
            centralization, coordination, and organizational structure to
            recruit effectively, carry out widespread political education, and
            develop leaders, but we have far more to go, our main limitations
            being capacity and resources.{" "}
            <strong>
              The Summer 2021 Convention is an opportunity to think seriously
              about how we can expand on these goals:
            </strong>{" "}
            We can decide on a path for YDSA that meets our political moment
            and, in the long-term, sets us on track to grow and cohere into the
            youth wing of a mass socialist workers&rsquo; party.
          </p>
          <p>
            <strong>
              Above all, YDSA&rsquo;s mission must be to make, train, and keep
              young socialists.
            </strong>{" "}
            To that end, Bread and Roses members in YDSA are putting forward our
            vision for YDSA through the following resolutions and a slate of
            socialist organizers who are dedicated to building YDSA and growing
            and strengthening the socialist movement as a whole.
          </p>
        </div>

        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          {this.state.candidate && (
            <>
              <h2>
                {this.state.candidate.name}, {this.state.candidate.school}
              </h2>
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
    allFile(filter: { absolutePath: { glob: "**/headshots/ydsa-2020/*" } }) {
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
