Twitter-clone as the name speaks is just like the official twitter application we use daily to post 
our updates, to know different things happening at different places, and nowadays even to 
fight/protest for any cause. This project consists of all the almost functionalities of twitter like 
Tweets, Likes, comments and retweets, Profile pages, Following and followers support, Instant 
messaging in real time, Group chat support, Profile pictures, Cover photos and much more!

       As mentioned above I created Twitter clone using NodeJS, MongoDB, ExpressJS framework.
Frontend is done using pug, database storing through mongoDB cloud, and uploading images using 
multer. ExpressJS is used for running the server. Used socket.io for real time notifications and 
messages, Bcrypt for hashing the user’s password.

As the user hops into our website they are in the login page where the user can enter the 
username/email and password to login. If the user is here for the first time he can click on the 
register link and get registered. All the user’s info is stored in the mongoDB atlas. I choose 
mongoDB cloud database to access it from anywhere.
As we can see in the above picture the password id hashed using Bcrypt.All the validation of the 
login and register page is done perfectly and assists the user about all the errors they are 
committing in logging in. All the data is verified from the database and allows the user to login.

 After creating the account and logging in the user is directed into 
the Home page of the application and will not be able to see any posts until they follow any user. 
User can tweet using the post area in the home page. We can see a navigation bar on the left side 
of the home page which consists of several functionalities like home, search, notifications, 
messages, profile and log out options. All the icons are taken from ‘fontawesome’ which is used 
by many famous companies like Microsoft, amazon, facebook etc.

As the user is able to see the tweets of the different users, they can 
like, retweet and reply to the tweets. The likes count and the 
retweet count will be visible beside them and are styling them was 
very fun and had a lot to learn from them. The like and retweet 
buttons turn into their respective colours after clicking and gives
confirmation to the user. User can also reply to the tweets using 
reply button. As the user clicks on the reply button a reply modal pops into the screen and has an 
input field to reply to the tweet the user has clicked.

I have also implemented the timestamps functionality so that the user can see when is the tweet 
posted. User can also pin and delete their own tweets on the home page and after pinning a particular 
tweet the icon turns blue.
         The search page consists of two portions namely posts and users which enables to search different 
users and posts respectively and can follow/unfollow respective users and if we click on a particular 
user it takes us to their profile page. The profile page consists of information like profile picture 
,cover photo, number of followers and following when further clicked can see who are on the actual 
followers and following. User can change the default profile picture using multer which is given after 
logging in by clicking the camera icon on the profile picture and select any of their image and can 
see the preview and crop the image accordingly. The user can do the same for the cover photo as 
well. It also contains the tweets of the profile holder.

By clicking on the inbox icon the user is directed to the messages tab where he can see all the 
messages from different users at one place. User can also create group chats and name them of their 
choice. On clicking on any message the chat will be visible and the user can chat and send messages 
from there. All the unread messages are styled in blue and when opened turns white and new 
message is shown above of all the messages which helps the user to easily check the messages. We
also have mark all messages as read button on the top right corner of the messages tab.
Users can get realtime messages using socket.io. They can also see a typing indication of dots gif 
while the opposite user is typing in the chat. The gif will be visible only while typing and gets turned 
off after stopping the typing for 3 seconds. The first and last messages of the particular session are 
also styled accordingly for more accurate chatting. User can also see the profile picture beside their 
chat.

Users receive real time notifications when their tweet is liked, retweeted, and replied respectively 
by a sliding notification in the view at the top right corner for 3 seconds. The same is 
implemented for the messages as well. The notification and message badges are updated
accordingly for every notification.
By clicking on the log out icon which is below of all the navigation icons user can log out of the 
web application.

