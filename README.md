# Travel Moire VZ. 2

#### TravelMoire is a Full Stack React CRUD web appliction that was created to encourage traveling, especially the exploration of hidden adventures around the world. 

## Technologies Used
* JavaScript 
* React
* HTML5
* CSS3
* MongoDB
* Postman
* Express.js
* Node

## MVP
* Create React app using re-usable Components
* Create a REST API using Express.js
* Create a React form that consumes the rest API data
* Make HTTP request with React Axios library for CRUD functionality 
* Deploy online 

## Hook
```
const [entry, setEntry] = useState({
  category:"",
  location:"",
  place:""
})

const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setEntry ({...entry,[name]:value})
} 
 ```   
## Main Prop
```
const {entries} = props;

    if (entries.length > 0) {
      return entries.map((entry) => { 
        return (
          <div>
            <div className="city"></div>
              <div className="listLocation">{entry.location}</div>
              <div className="listPlace">{entry.place}</div>
              <div className="listCategory">{entry.category}</div>
              <button className="delete"></button>
            </div>
          </div>
        );
      });
 ```       

## Prototype


 ## Post MVP
* Add upload photo option 
* Add business details to each place on Home Page
* Connect User Authentication to Login Form 

## Deployment [Project URL] 
#### View the deployed app [here.](https://travelmoire2.herokuapp.com/)


## SWOT Analysis
### Strengths:
I really enjoyd styling the components in React. I got everything set up fairly quickly to mimic the wireframe. Also, the database and routes for CRUD functionality was pretty simple to set up this time around. 

### Weaknesses:
Properly executing methods in functional and class components in React is still an opportunity area.

### Opportunities:
To reinforce all of the concepts learned during this project and to familiarize myself further with using forms and other hooks to continue developing my ideas.
