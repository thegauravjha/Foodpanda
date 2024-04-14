# First I did the basic plannnig:

Header Component - Logo - Nav links:
• Home
• About
• Contact
• Cart

Body Component - Heading - Restaurant Container
• Restaurant Card:
_ Image
_ Name
_ Rating
_ ETA
_ Cuisines
_ Address

Footer Component - (c) copyright section - Helpful Links - Company Address

# Header Component:

- Created the Navbar.
- Took the image from https://www.pngegg.com/

# Body Component:

- Created a Restaurant Card component as <RestCard />
- Created the dummyDataAPI.js file and copied the JSON response from Swiggy's Api.
- Inside the main_container, rendering the <RestCard /> on the logic of calculation the length of dummyDataAPI.
- Mapping on the dummyApiData to dynamically render the <Res Card /> same as the length. Passing the currData as a props: <RestCard key={currData.info.id} data={currData} />
- Created Filters, on click of filter title, main_container will show the filtered <ResCard />

# General:

- Wrote the complete CSS from scretch.
- Using Parcel as bundler, not webpack (which create-create-app uses).
- Choose the colors for the website from https://coolors.co/
- Using Montserrat Google Font as import in CSS.
- Used the Best Practice, seprated each components into a component folder. And, all hardCode values/strings (like: image url) into constants.js file in utils folder

# Issues:

- On hover of cards, I have increased the card size to show the pop effect, but it is not increasing the content or image of the at all and having the issue with content inside card, as well as placement with other cards.

- When we search, on press Enter it is showing diff result, and on click button it is showing correct. On enter, it is not considering the value of input's last character. ex: "kingo", it should give the result match of kingo only. But it is showing card of with "king" as well. Fix the enter search.

- Restaurant name should not move to next line, crop the text and show ... instead. But search should work fine.

- All Cost for two price, and enable Sort Filters.

- cropText() util function is not working for cousines as it is an array. I need to change the logic of cropping the string and array both.

- use crossproxy.io/ to get rid of proxy issue for live app.

- Add Lazyloading api fetching also.

- Load the home page and quickly click on (Top Rated) filter, it'll show all the cards in that case but the filter is now selected to (Top Rated), we can disable the filter button until the loading is happening.

- Call API as per geoLocation, by passinh ?lat=28.61450&lng=77.30630 in the api call.

- useOnlineStatue() hook is not working expedted when we are coming from another component (about/ contact), it's just adding the EventListener again, and sending the value as onlineStatus: False. Try this with throttling as "Offline".

resId:
// 12489 => nothing to show
// 253981 => through an error
