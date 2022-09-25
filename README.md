# Travel Moire VZ. 2

#### TravelMoire is a full stack web appliction that was created to encourage traveling, especially the exploration of hidden adventures around the world. 
<img width="640" alt="HomePage" src="">

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
* Design a social media inspired UI using React
* Implement a backend server using Node.js
* Utilize MongoDB and Mongoose to store data 
* Deploy online 

## Hooks
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

## Sketche
<img width="804" alt="TravelMoireWF" src="https://user-images.githubusercontent.com/103911002/186611637-4b97b32e-fb72-4a16-9cbf-64970f42fe25.png">

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
