# Travel Moire VZ. 2

#### TravelMoire is a Full Stack React CRUD web appliction that was created to encourage traveling and the discovery of new adventures around the world.

<img width="1411" alt="Screen Shot 2022-09-27 at 1 17 37 AM" src="https://user-images.githubusercontent.com/103911002/192438329-84c4e21b-6106-4fde-8bcc-f098cf1a8e8f.png">

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

## Hooks
```
const [entry, setEntry] = useState({
  category:"",
  location:"",
  place:"",
  image:""
})

const handleChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setEntry ({...entry,[name]:value})
} 

```
```
const navigate = useNavigate()
  
  const handleSubmit = async () => {
 try {
  await axios.post("http://localhost:8000/travelmoire/entries/create-entry",entry)
  navigate("/show")
 } catch (error) {
  console.log("error message", error.message)
 }
  }
 ``` 

``` 
useEffect(() => {
    getAllEntries();

```

## Home Page Component 
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
![Prototype TravelMoire](https://user-images.githubusercontent.com/103911002/192440656-6ac8e1ed-09b3-41b5-a329-7ce2d2c6e0cf.png)

 ## Post MVP
* Add business details to each matching location on Home Page (CSS)
* Add scrollable feauture to category menu
* Add Footer Component
* Connect User Authentication to Login Form 

## Deployment [Project URL] 
#### View the deployed app [here.](https://gorgeous-scone-e56fa5.netlify.app/)

## SWOT Analysis
### Strengths:
I really enjoyd styling the components in React. I was able to set my main structure up fairly quickly to mimic the wireframe. Also, the database and routes for CRUD functionality was pretty simple to set up this time around on the backend. 

### Weaknesses:
Properly executing methods in functional and class components in React is still an opportunity area. 

### Opportunities:
To reinforce all of the concepts learned during this project and to familiarize myself further with using forms and other hooks to continue developing my ideas. Also, continue developing CSS to mimic wireframe in certain areas.

## Code Issues and Solutions
> The database would not connect after deployment.  I had to set the environment variables in heroku and add a procfile to my root folder to specify the commands for heroku to execute properly at start-up.  I also had to change the dependencies in my package.json file  from server.js to index.js. I also had to allow IP access in mongoDB for my database to connect. Furthermore, My GET requests were being blocked due to a mixed-content error served over http. I had to change each route to https. 
