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
    name: "Jake Colosa",
    pronouns: "He/They",
    school: "New York University",
    position: "Co-Chair",
    bio: (
      <>
        <p>
          I joined YDSA as a freshman. I wasn’t a socialist then, but through
          political education and organizing I realized that socialism was the
          only way we could build a just and sustainable world. For the next 2
          years I served on my chapter’s Organizing Committee, where I helped
          organize our COVID relief campaign and strike solidarity efforts for
          our graduate student union. Those campaigns engaged thousands of
          students on our campus, recruited dozens of new YDSA members, and
          developed the current generation of leaders in our chapter. I also
          gained invaluable experience and political education from my comrades
          as the YDSA representative on NYC-DSA’s Steering Committee and as a
          member of Bread &amp; Roses.
        </p>
        <p>
          For the past year I have served as a member of YDSA’s NCC. On the NCC
          I played an integral role in organizing the 2021 Fall Drive, the 2022
          YDSA Conference, the YDSA Dues Drive, and Red Hot Summer. I also
          spearheaded the creation of the YDSA Mentorship Coordinating Committee
          and have worked to support and expand YDSA mentorship. These projects
          have helped grow YDSA’s size and deepen the political and
          organizational skills of our members and I hope to expand on this work
          next year.
        </p>
      </>
    ),
  },
  {
    name: "Kayla Sharpe",
    pronouns: "They/Them",
    school: "Oakland University",
    position: "At-Large",
    bio: (
      <>
        <p>
          I became a dues-paying member of DSA my freshman year of college in
          2019 and have been a member of Oakland University YDSA for 3 years—
          serving as vice-chair and chair for the past 2 years respectively.
          During my time in chapter leadership, I have played a role in
          organizing student canvasses to elect a DSA member to the Pontiac City
          Council, building YDSA membership through our recent faculty strike,
          fostering the growth of a new YDSA chapter in Metro Detroit, as well
          as preparing for our upcoming Fight for $15 initiative for student
          workers. My largest priorities in YDSA leadership have been developing
          new leaders within our chapter as well as building an accessible
          political education program.Through this organizing, new members have
          developed great organizational and leadership skills, along with the
          confidence to execute them in facilitating tabling, one-on-ones, and
          meetings. Alongside organizing with YDSA, I have been an active member
          of Metro Detroit DSA for 3 years and joined the Bread & Roses caucus
          this year. In our DSA chapter I have helped build our YDSA
          Coordination program and participated in facilitating meetings
          regarding labor and the importance of YDSA to the socialist movement.
        </p>
      </>
    ),
  },
  {
    name: "Taylor Clark",
    pronouns: "He/Him",
    school: "University of California, Santa Barbara",
    position: "At-Large",
    bio: (
      <>
        <p>
          I was first drafted into the class war in 2019 when I began knocking
          on doors for Bernie Sanders. Like so many others, Bernie fundamentally
          transformed my political consciousness from that of an apathetic
          liberal to a raging class warrior. But, while campaigns end, the
          struggle continues. After March 2020, I pushed our Students for Bernie
          chapter to join YDSA and was elected Co-Chair immediately after.
          Despite the first 18 months of our chapter’s existence being in the
          middle of a global pandemic, over the past two years, we’ve grown from
          a small cell of Bernie veterans to a thriving YDSA chapter with over
          60 members and a whole new generation of chapter leaders. To
          accomplish that, we organized around issues from housing and
          houselessness to pandemic relief and over-policing - and of course,
          labor solidarity. If my past two years as a founding Co-Chair of UCSB
          YDSA and one year as a field organizer in SRU-UAW have taught me
          anything, it’s that the only way to enact the transformative change
          that we as socialists are looking for is by organizing the working
          class. Despite our still limited involvement in labor, working-class
          power has yielded by far our most significant victories.
        </p>
      </>
    ),
  },
  {
    name: "Lance Jackson",
    pronouns: "He/Him",
    school: "University of California, Berkeley",
    position: "At-Large",
    bio: (
      <>
        <p>
          I became a member of YDSA in the summer of 2020 because it looked to
          me like a revolution was being born and I didn't want to miss any of
          it. My introduction to organizing came from phonebanking for Jackie
          Fielder and Prop 15. I was welcomed into DSA by a lovely network of
          mentors who helped me understand the role elections play in radical
          movements and introduced me to the labor movement. During my sophomore
          year I wrote canvassing scripts, taught lessons about racial
          capitalism, and attended Rank-and-File School where I realized I can
          make the biggest difference as rabble-rousing socialist teacher.
        </p>
        <p>
          By my junior year, nothing occupied more of my brain than helping
          young people learn about socialism and I was elected co-chair of
          political education. That summer and fall I was a lead organizer in my
          campus' response to the UC tuition hikes. This was a short-lived
          campaign, and we made a tough transition to strike support;
          fortunately I organized reading groups on strategy in the youth,
          climate, and socialist movements that kept us from losing steam. It
          pays off to build spaces where brand-new people can contribute to the
          intellectual development of the whole chapter.
        </p>
      </>
    ),
  },
]

class Candidates2022 extends React.Component {
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
        title="2022 YDSA Summer Convention"
        color="red"
        heroImageName="index"
        layoutClassName="home"
      >
        <SEO
          title="2022 YDSA Summer Convention Slate &amp; Resolutions"
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
            The 2022 YDSA Convention will be held online from{" "}
            <strong>Friday, June 25 to Sunday, June 27</strong>. For more
            information, please check the{" "}
            <ExternalLink href="https://y.dsausa.org/2021convention/">
              official YDSA convention website
            </ExternalLink>
            .
          </h3>
          <p>
            The Bread and Roses caucus is excited to introduce our slate for the
            2022 National YDSA convention: Jake Colosa (New York University),
            Kayla Sharpe (Oakland University), Taylor Clark (UC Santa Barbara),
            and Lance Jackson (UC Berkeley)!
          </p>
          <p>
            As democratic socialists, we have an obligation to uphold democracy
            in our organization. Democracy is not just holding elections and
            voting on resolutions, democracy is the rule of the people. To build
            a mass movement that can intervene in the world, we must exercise
            people power on a local and national level. Our members and elected
            leadership should be able to direct our collective resources towards
            our democratically selected priorities.
          </p>
          <p>
            Building a more democratic organization includes creating a stronger
            relationship and greater coordination between our national leaders,
            YDSA staff organizers, and YDSA interns. Democratically-deciding our
            priorities and creating a structure for collaboration allows our
            staff to provide the integral support that YDSA chapters need.
            Further, stipends for our national leaders allow for greater
            capacity to carry out the work mandated by our membership. YDSA has
            the capacity to train the next generation of socialists to organize
            the working class as rank-and-file workers and movement organizers
            when our national leaders are not forced to split time between
            school, work, and serving on the NCC, and when our YDSA staff
            organizers direct time towards membership-decided priorities.
          </p>
          <p>
            Without any source of funding from the national organization, YDSA
            chapters often lack the resources needed to pull off successful
            campaign work and to send members to YDSA conferences and
            conventions. Even YDSA chapters in areas with large DSA chapters can
            have difficulty accessing those chapters’ resources and organizing
            capacity, simply because YDSA is not prioritized by DSA leaders in
            the area. This is despite the fact that YDSA has proven itself time
            and time again to be an effective organizing body that has continued
            to grow its membership and has produced potent student organizers
            that have helped organize student-worker unions from Dartmouth to
            the UC system. By providing YDSA members a seat at the table and by
            matching funds made through their organizing efforts, DSA can
            support our YDSA socialist leaders. These are the organizers who
            will build and lead a mass movement of millions of working people.
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
              <h3>
                {this.state.candidate.pronouns}, {this.state.candidate.position}
              </h3>
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

export default Candidates2022
