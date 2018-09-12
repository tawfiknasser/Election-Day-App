# **Election-Day App**
### 3 main goals for the app :
- provide live results for the client team, contain info about who voted and who didn't, with simple statistics on each voting box.
- More advanced live statistics with describing graphs.
-  Platform for client party cadres. so it make it easier for them to know their tasks and where they stand in the middle of the busy day, it could include SMS (on the app). 

________
This is final project,
done at the end of the  highly selective full stack course.

[Founders and coders,](https://foundersandcoders.com) free coding intensive boot camp.

 [
Link for the main issue](https://github.com/foundersandcoders/nazareth-project-leads/issues/13)
________
### What problems this app solve ?
Different parties try to estimate the result before the day end,
try to get all their followers to vote as soon as possible in the election day.
So to manage this, parties are using a team of people on each voting box , 
write down on papers the voters names and pass it to the party base,
where in the base others get this data that written on the paper and tik the names they got on their own paper or some computer where they manage the data.
the app provide them fast flow of data, real time statistics and less human resources on this part of work.

there is more affects and problems that this app provide and solve.
________
### Empathise & define with stickers : 
(who and what are we aiming for, why ... )
[Image Here](https://user-images.githubusercontent.com/36166288/45060191-9b84d180-b0a7-11e8-8414-43f603b390f1.jpeg)
________
### Sketching it
> [Sketching](https://medium.com/@yedantao/sketching-it-41c210ca9a90) is not a ultimate purpose. The purpose is thinking during sketching. 

![selection_014](https://user-images.githubusercontent.com/36166288/45060602-41850b80-b0a9-11e8-8bfd-5fedd93e8873.png)

In our first designing step, 
we used figma to estimate how our app is going to look.
[check our first issue](https://github.com/tawfiknasser/Election-Day-App/issues/1) .

designing it on figma allows us to prototype and test it on clients before diving into the code.
![twoguystesting](https://user-images.githubusercontent.com/36166288/45123162-a48ca600-b16e-11e8-890d-dfe990c6f999.png)

excellent UX means excellent product.
read about [usability testing](http://www.sensible.com/rsme.html)


________

### Different Views (Different users type)
basically there will be four different types of users.
_you can look over them on figma_
 ![selection_015](https://user-images.githubusercontent.com/36166288/45102481-85722200-b136-11e8-8852-cac4b707926d.png)
 
_B stands for box,R for region,M for master)_

##### UserOnBox :
each UserOnBox is in charge of entering the data,
on the box he got assigned on,
for everyone who commit to vote.
this view contain search input and the search results as boxes so he can find & tic who is voting easily.

##### UserOnRegion :
each UserOnRegion is in charge of managing the data in group of boxes,
call their followers who didn't vote, 
and other tasks.
this view got a list of all the voters divided by priorty.

##### UserOnMaster : 
Master view,
besides his access to any region view ,
he also got more advanced statistics, graphs and numbers.
he can send SMS's to the regions and seperated users on tasks.

##### UserOnTask :
_Later..._
_____
### Database schema
For designig our database schema we are using [DB designer](https://www.dbdesigner.net) tool.
![screenshot from 2018-09-12 15-44-50](https://user-images.githubusercontent.com/37940433/45425763-fcfa0100-b6a2-11e8-91f4-7dbd9d8e2dfa.png)

