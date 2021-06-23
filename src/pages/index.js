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
    name: "Cyn Huang",
    school: "UC Berkeley",
    position: "Co-Chair",
    bio: (
      <>
        <p>
          Hi comrades! I’m an incoming third-year at UC Berkeley where I serve 
		  as the co-chair of Cal YDSA. I’m also a member of YDSA’s National Labor 
		  Committee and a head steward in United Auto Workers Local 2865. I plan on 
		  becoming a rank-and-file teacher. 
        </p>
        <p>
          Early on in high school, I radicalized around issues of economic inequality 
		  and workplace democracy. However, I didn’t act on my political beliefs until 
		  Bernie’s second presidential campaign inspired me to get organized. Since 
		  joining DSA, I’ve helped grow Cal YDSA and Bay Area YDSA through 1:1 relational 
		  organizing; robust political education; exciting, outward-facing campaigns like 
		  YDSA for Bernie and Y/DSA for Proposition 15; and workplace organizing with academic 
		  student employees at the University of California. 
        </p>

        <p>
          At the national level, I have served on the COVID-19 response team 
		  that was formed for the purpose of helping leaders across the country 
		  maintain their chapters and meet the challenges of pandemic organizing. On 
		  the National Labor Committee, I have mapped out national YDSA membership; 
		  organized national interest calls about the rank-and-file strategy, as well 
		  as a “Jobs Fair” for students enthusiastic about organizing in strategic 
		  sectors of the economy; and run multiple semesters of a widely attended Rank-and-File School. 
        </p>
        <p>
          As a Marxist, I believe that the only way we can win socialism -- a 
		  world in which people can live freely and creatively -- is by building 
		  mass organizations of the working class and leveraging the strategic 
		  power that workers have at the point of production. In both these matters, 
		  YDSA has a critical role to play: YDSA should systematically recruit 
		  and develop thousands of young, open-minded students into lifelong 
		  socialist organizers, and equip them with the political perspectives, 
		  organizational skills, and practical experience needed to advance 
		  struggle wherever they go in life, but especially in their (future) workplaces. 
        </p>

        <p>
          I’m running for co-chair because I want to further empower 
		  YDSA to make these kinds of interventions. As a member of the 
		  NCC, my priorities would be to expand the rank-and-file pipeline 
		  (as outlined in the resolution I co-authored with other comrades on the NLC), 
		  build a 1:1 mentorship program, and recruit and develop organizers 
		  through a national campaign like College for All. Through these efforts, 
		  we can turn YDSA into a mass organization of working class students who 
		  understand what it takes for the working class to exercise political power.
        </p>

        <p>
          Thank you for considering me for NCC –– and thank you, YDSA, 
		  for raising me. I look forward to the struggle ahead. 
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
          Hello! My name is Dahlia Wilson and I am a current NCC member. 
		  I served as the co-chair of Albany High School YDSA for three 
		  years, and next year I will be studying neuroscience at Reed 
		  College in preparation to become a rank-and-file nurse midwife. 
		  As a Marxist and and a feminist, I believe that capitalism is 
		  a fundamental barrier to a just world, and that a society founded 
		  on solidarity, progress, and human flourishing is only attainable 
		  through united working class resistance.
        </p>
        <p>
          In tenth grade, after becoming frustrated with liberal social 
		  justice activism, I joined East Bay DSA, founded a YDSA chapter, 
		  and committed myself to socialist organizing. Through supporting 
		  the Oakland teachers’ strike, I saw the power of a united multiracial 
		  working class taking militant action. I learned what it means to 
		  be a comrade and to be bound to someone else by a shared 
		  commitment to the lifelong struggle for socialism.
        </p>

        <p>
          Over the last three three years, we campaigned for Bernie Sanders, 
		  recruited a new steering committee of underclassmen to continue 
		  the chapter and grew our membership by about a third each year 
		  through a combination of chapter-wide discussions, targeted 1-on-1 
		  organizing, and outward-facing events. We also played an important 
		  role in organizing a regional group for YDSA organizers from across 
		  the East Bay to share skills, resources, and political strategy. This 
		  year we organized for progressive taxation and student debt cancellation, 
		  and stood in solidarity with our teachers’ union when the school board 
		  tried to push through an unsafe and anti-union reopening plan.
        </p>
        <p>
          Now that I’m graduating high school, I’m sad to leave my chapter 
		  behind, but so proud of the incredible things we have accomplished 
		  and looking forward to a lifetime of organizing -- starting with 
		  organizing a YDSA chapter at my college!
        </p>

        <p>
          In this profoundly radicalizing time to be a teenager, YDSA has 
		  the unique opportunity to organize students from a variety of 
		  backgrounds across the country. I have loved seeing more and 
		  more high school YDSAs get started this year and I want high-schoolers 
		  across the country to have the opportunity I had to learn from 
		  \mentors and grow as a socialist organizer. I’m running for a second 
		  term on the NCC because I believe that YDSA can be a vehicle for 
		  socialism in this country. To get there, we must be a mass organization 
		  rooted in the working class with a strong labor strategy and a strategy 
		  to expand our influence to every young person. We must commit ourselves 
		  to rebuilding the militant core of the labor movement, by supporting 
		  students in entering strategic industries to organize on the shop 
		  floor as rank-and-file union members. We must run huge national 
		  campaigns for transformative demands, winning reforms and raising 
		  up this generation of socialists with a theory of change to bring 
		  about a true shift of power from capitalists to workers.
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
  {
    name: "Jake Colosa",
    school: "New York University",
    position: "At-Large",
    bio: (
      <>
        <p>
          I’m a 21 year-old student at New York University studying 
		  History on my way to becoming a high school Social Studies 
		  teacher. Since joining NYU YDSA I have served on its Organizing 
		  Committee for two years, helping grow our chapter and develop new 
		  leaders through campaigns like YDSA for Bernie and our tuition 
		  strike. Most recently, I helped lead our strike solidarity 
		  efforts for our graduate student union’s three week strike, 
		  helping them win a historic contract and reaching thousands 
		  of undergraduates through our solidarity pledge. The success 
		  of these campaigns and their ability to train and recruit new 
		  members inspired me to put forward the College for All 
		  resolution at this year’s convention so every chapter is 
		  equipped and ready to run similar campaigns on their campuses!
        </p>
        <p>
          In Fall 2020, I joined YDSA’s National Political Education 
		  Committee, where I helped run national reading groups and 
		  pre-convention discussions and recruited new members to the 
		  committee, doubling its size. Finally, since April 2020 I have 
		  served as the YDSA representative on NYC-DSA’s Steering Committee. 
		  In this role I have held fundraisers to send our NYC YDSA members 
		  to the Summer Convention, helped with the administrative tasks of 
		  running NYC-DSA, and worked with student organizers to start the 
		  first high school YDSA chapter at Townsend Harris High School in 
		  Queens! My time in these positions reaffirmed my belief that political 
		  education is essential to develop YDSAers into lifelong socialist 
		  organizers. On the NCC I will continue and expand our political 
		  education efforts and am a proud co-sponsor of the Strengthening 
		  YDSA’s Political Education Program resolution.
        </p>

        <p>
          The most impactful experience I have had in YDSA was going to 
		  Chicago to support the CTU/SEIU strike in 2019. While it wasn’t 
		  my first picket line (my mom brought me to her union’s picket 
		  line when I was a baby!), it was the first time I truly witnessed 
		  class struggle. I got to know teachers on pre-dawn picket lines 
		  across the city, marched with tens of thousands of strikers through 
		  downtown Chicago, and delivered food to striking workers and their 
		  students. Along the way, I met countless educators who told me how 
		  difficult teaching in an under-resourced education system was, but 
		  also how proud they were to be fighting for their students.
        </p>
        <p>
          That feeling of solidarity followed me home, and soon I decided to 
		  change my career path and become a teacher. I am excited to organize 
		  to make my future union a militant vehicle for class struggle, and 
		  help my coworkers feel and wield their own power. But this task 
		  would be insurmountable on my own, which is why I strongly support 
		  the National Labor Committee’s efforts to build a rank-and-file 
		  pipeline this year and support the NLC’s resolution at this convention.
        </p>

        <p>
          I’m running for NCC because I know that there can be a YDSA chapter 
		  on every campus and I believe that the vision for YDSA outlined in 
		  the Bread & Roses slate of resolutions will help us get there. I am 
		  so grateful to organize alongside all of you and am excited for what 
		  comes next for YDSA!
        </p>

      </>
    ),
  },
  {
    name: "Clare Katko",
    school: "Diablo Valley College",
    position: "At-Large",
    bio: (
      <>
        <p>
          My name is Clare Katko and I’m the current co-chair of Diablo 
		  Valley College YDSA. I am transferring to San Francisco State 
		  University in the fall, where I will complete my degree and 
		  then move on to get my teaching certificate post-grad. 
        </p>
        <p>
          I joined YDSA at the end of 2019. I was always interested 
		  in politics, but had a liberal idea of change. Before I 
		  became a member of DVC YDSA, I thought I would go into either 
		  politics or law. It was YDSA that gave me a real theory of 
		  change: I now believe our best chance at achieving material 
		  progress for the working class is through rebuilding the labor 
		  movement by becoming rank-and-file workers.
        </p>

        <p>
          Since joining my chapter, I have served two-terms as my chapter’s 
		  Co-Chair. At the beginning of 2020, I helped the chapter transition 
		  to doing online work and we then ran a successful Defund the Police 
		  Campaign off-campus. After this campaign, my chapter grew throughout 
		  this year. 
        </p>
        <p>
          The rank and file strategy -- which ensures young socialists merge 
		  with the labor movement -- is among the most important reasons YDSA 
		  and the new NCC should strive to maintain a strong national organization, 
		  focused on recruitment and membership retention.
        </p>

        <p>
          I believe YDSA needs a single, strategic national campaign in 
		  order to maintain\build the strength, momentum, and influence 
		  necessary to actively recruit and maintain new membership and 
		  chapters. We need to ensure all our members engage in regular 
		  political education in order to become lifelong dedicated organizers 
		  and militant rank-and-file workers. If elected, I hope to use my 
		  time on the NCC to achieve this vision -- one where YDSA, our members, 
		  and our campaign are aligned with the goal of revitalizing the labor movement. 
        </p>
		<p>
		  It has been a tremendous honor organizing with and learning from YDSA this past year, 
		  and I look forward to organizing with all of you for years to come.
		</p>
      </>
    ),
  },
  {
    name: "Alex Pellitteri",
    school: "Hunter College",
    position: "At-Large",
    bio: (
      <>
        <p>
          I am running for NCC because I want to grow YDSA into a 
		  mass working class student organization that will develop 
		  life-long socialist organizers. I am a 20 year old 
		  Political Science major at Hunter College, part of the 
		  CUNY system, one of the largest public universities in the 
		  country. I've lived my entire life in Brooklyn, NY, and am 
		  the son of a Honduran immigrant. My experience as a chapter 
		  leader, DSA campaign manager, and NOC committee chair have 
		  prepared me for the role of being an NCC member.
        </p>
        <p>
          I’ve been fascinated by politics since I was ten years old. 
		  When I was 15 years old, I began volunteering on political 
		  campaigns and interned for my local Assemblywoman. At the 
		  time, my conception of politics was that Democrats are good, 
		  and Republicans are bad, and I dreamed of working for the 
		  Democrats one day, until Bernie Sanders ran for president. 
		  I was drawn to Bernie because of long history of fighting 
		  for the working class. His campaign made me realize that 
		  change comes not from politicians but from working class 
		  people who decide to organize. This changed my understanding 
		  of the world and I immediately threw myself into volunteering 
		  for Bernie and organizing my local community. I found DSA and 
		  YDSA through the Bernie campaign, and soon, I was elected to 
		  represent NYC YDSA on the NYC DSA Steering Committee. When I got 
		  to college, I helped revive the Hunter YDSA chapter, where I 
		  still serve on the Organizing Committee and am helping run 
		  our campaign to pass the New Deal 4 CUNY, a bill that would 
		  make public college free in New York City.
        </p>

        <p>
          This experience led me to become the campaign manager for Marcela Mitaynes, 
		  a DSA candidate elected to the New York State Assembly last fall. I was 
		  responsible for overseeing every aspect of our campaign, including field, 
		  fundraising, communications, and endorsements, in the midst of the COVID 
		  pandemic. I saw firsthand the importance of running class struggle socialist 
		  candidates In order to grow our movement and build state power. I currently 
		  chair the Field Committee of the National Organizing Committee (NOC), where 
		  I've developed and overseen a team of field leads who have helped organize our 
		  Cancel All Student Debt phone/text banks.
        </p>
        <p>
          For the first time in decades, socialists are beginning to win power. 
		  If we can use this momentum to grow DSA into a mass organization fighting 
		  for the working class, we can lead the movement to win socialism. If we 
		  can't, we will go down in history as yet another unsuccessful socialist 
		  organization. I am running for NCC because I want to turn YDSA into a mass 
		  working class student organization that will develop life-long socialist organizers. 
		  My experience serving on the NOC and helping to lead a national campaign 
		  has shown me how vital it is that each YDSA member feels connected to the 
		  national organization and understands the importance of class struggle, and I 
		  believe that to get there, we need to run one singular campaign that has mass 
		  working class appeal, that each chapter can participate and grow its membership through.
        </p>

        <p>
          Being in this movement has been one of the biggest honors of my life, and whether 
		  I win or not, I look forward to organizing with all of you for years to come!
        </p>
      </>
    ),
  },
  {
    name: "Rafi Ash",
    school: "Amherst Regional High School",
    position: "At-Large",
    bio: (
      <>
        <p>
          Hi! My name is Rafi Ash and I currently serve as the 
		  co-chair of the Amherst Regional High School YDSA, which I 
		  founded in April 2020. I am 17 years old and will begin my 
		  senior year in September. I joined DSA in 2018 and became more 
		  active in the past year and a half.
        </p>
        <p>
         In the days and weeks after Bernie suspended his 2020 campaign 
		 and in the midst of a global pandemic that further amplified 
		 the disparities between the wealthy and the working class, 
		 I began to feel hopeless. But I realized that hopelessness 
		 is not a form of political organizing, and armchair pessimism 
		 will never change or improve the world. So instead of giving up, 
		 I decided to get to work.
        </p>

        <p>
          Organizing during distance learning presented unique challenges, 
		  but I have learned a lot. Over the past year, my chapter has 
		  organized political education workshops, phonebanked for a ballot 
		  measure, run local Cancel Student Debt and College for All events, 
		  and worked in coalition with Sunrise and a local police abolition 
		  group against school budget cuts. We are getting involved in the 
		  teachers’ union’s campaign to raise paraeducators wages. Nationally, 
		  I have worked as a field lead on the Cancel Student Debt and 
		  College for All campaign for the past 5 months.
        </p>
        <p>
          I am a YDSA member because I am a Marxist and because I am sick of 
		  capitalism and how it has made itself seem permanent and immutable. 
		  I believe that socialist change must come from the working class 
		  and the labor movement. Because of that, YDSA must be made up of 
		  the working class and as diverse as the working class. We must commit 
		  ourselves to rank-and-file labor organizing on campus and after graduation. 
		  We must expand and diversify our organization, focusing on community 
		  college, high school, and HBCU chapters. We must fix where we have gone 
		  wrong in building a movement where many marginalized groups remain underrepresented.
        </p>

        <p>
          As an NCC member, I will work to expand our national campaigns and 
		  political education. The NCC should provide aid to chapters running 
		  local campaigns relevant to their campuses so they can expand their 
		  membership and presence on campus. It is important that we train 
		  socialist organizers who listen to and reflect the wants of the working 
		  class on campus, so that we fight as and with the working class and not 
		  solely on their behalf in place of them.
        </p>

        <p>
          We have nothing to lose but our chains. We have a world to win!
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
                      <h4>{candidate.school}</h4>
                      <Button>Read more&hellip;</Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div> 

        <div className="content-column">
          <h3>
            The 2021 YDSA Convention will be held online from{" "}
            <strong>Friday, June 25 to Sunday, June 27</strong>. For more
            information, please check the{" "}
            <ExternalLink href="https://y.dsausa.org/2021convention/">
              official YDSA convention website
            </ExternalLink>
            .
          </h3>
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
            the U.S. receive vaccines, the U.S. ruling class has condemned
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
            </strong>{" "}
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
          <h3 style={{ textAlign: "center" }}>
            Do you support Bread and Roses' vision for YDSA?{" "}
            <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSfSmdjjx1Dvn6Q-zhHyHW-yxBTlUuNk1x8zO01VFfvA0MbFxg/viewform?gxids=7628">
              Sign here!
            </ExternalLink>
          </h3>
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
    allFile(filter: { absolutePath: { glob: "**/headshots/ydsa-2021/*" } }) {
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
