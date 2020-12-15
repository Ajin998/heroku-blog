# Blog Backend API 

## Introduction:-
This project is based on express application that will fetch all blog/blogs through API(Application Programming)Interface) specified by the user.

## Technologies

1. Node.js
2. Express (Node.js Framework)
3. Postman (Testing tool for making API call to our application)
4. JSON--> JavaScript Object Notation (Our Data).

## Setup:-

To run this project Firstly:-
1. Clone this project in your repository.
2. Run $ npm install, that will basically install all the dependencies of our application in your local machine.
3. Finally run $ npm start, to start our application's server.

### :smile: Congratulation you made it!! server is running.... on your localhost://3000.

## Fetching Data

1. Now head to localhost:3000/Blog
2. Now here Blogs is our endpoint to serve all our blog posts.
3. To fetch blog by id simply head to localhost:3000/Blog/ and at the end append the id of the blog.


## Live Example:-

Heroku link :- http://blog-backendapi.herokuapp.com/Blog/

:information_source: Remember to fetch particular blog by ID, append the ID to the end of Blog/

    Example: 
        1. http://blog-backendapi.herokuapp.com/Blog/2rvqpdbpka3n3fhd  --> Fetch single blog by ID (2rvqpdbpka3n3fhd )

        Output:-
        {
            " State ":  " Successfully Acknowledged !! " ;
            " Message ":  " Blog ID \" 2rvqpdbpka3n3fhd \ "found and fetched " ;
            " Result ":  [
                            {
                                " Id ":  " 2rvqpdbpka3n3fhd " ;
                                " Responsible ",  " Aryanna Lady Caca " ;
                                " Title ":  " It is easy to receive, for those words. " ;
                                " Content ";  "The result is criticized. To the necessities of the matter is obliged to reject in order that the ancestors had a great time. In order us some sense of all that he is. \ N \ n do not know who most of the pain of those whom rLaboriosam. The sorrow he felt the same effect. She is also very offices. The pain was painful but it is easy to find from the undertaking. To obtain any dishonor to the needs of it again. \ N \ n rEligendi do not look at the pain that some e-distinction are those who are less. The sorrows of pain in the life of the just, of blessed accepted to Liber, instead of being here. Rejects, therefore, as the seasons of discomfort, because some of the pain of the pleasure of this man. At this point it is something, though it receives, the greater the pain we hold a great victory. Some times there, but it is. Debitis for nothing is not of things. To the necessities of our pleasures by which the pains of that. For them, it is, therefore, of things are, I will open. Where quo and even worse, because the time-pleasing elements. \ N \ rCulpa for error enhanced. For pleasure, he rejects her pain. Or he is. \ N \ rFugiat Each time there is yet. By the law of wills, and was selected for the pleasures of itself or by the encounter. In order to attain regular because it is necessary to manage the pain." ;
                                " Links ":  [
                                            {
                                                " Title ":  " handle him or what he wants. " ;
                                                " Id ":  " 2rvqpdbpka3n3fhk "
                                            } ;
                                            {
                                                " Title ":  " How called smart. " ;
                                                " Id ":  " 2rvqpdbpka3n3fhi "
                                            }
                                            ] ;
                                " ImageUrl ":  " https://cdn.fs.teachablecdn.com/IBEoZhOqQGukTEpVOwbg "
                                }
                                ]
        }


