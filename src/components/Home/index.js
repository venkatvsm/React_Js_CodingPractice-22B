import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="profile_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
        alt="profile"
        className="profile_image"
      />
      <h1 className="profile_heading">Wade Warren</h1>
      <p className="profile_para">Software developer at UK</p>
    </div>
    <ul className="listcontainer">
      {blogsList.map(eachItem => (
        <li className="itemsList" key={eachItem.id}>
          <div className="postContainer">
            <h1 className="title">{eachItem.title}</h1>
            <p className="publishedDate">{eachItem.publishedDate}</p>
          </div>
          <p className="description">{eachItem.description}</p>
          {blogsList.length !== eachItem.id && <hr />}
        </li>
      ))}
    </ul>
  </div>
)

export default Home
