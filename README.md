# Cookie-based Login Page
---
Cookie-based Login Page web app project for Alpha Camp Semester 3

![Demo](/Demo.png)

## Getting Started
---
This mini web project is an updated version of Login Page, which implements the basic account login functionality and cookie-based auto-login.[<sup>1</sup>](#1)

This project is established on the following packages:

+ **[Node.js](https://nodejs.org/en/)**: For creating a local server and a script designing server actions
+ **[Express](https://expressjs.com/)**: For setting up routing rules for directing users to specific webpages
+ **[Handlebars](https://www.npmjs.com/package/express-handlebars)**: For creating reusable webpage templates
+ **[body-parser](https://www.npmjs.com/package/body-parser)**: For analyzing data contained in request packets
+ **[cookie-parser](https://www.npmjs.com/package/cookie-parser)**: For analyzing data contained in a cookie
+ **[nodemon](https://www.npmjs.com/package/nodemon)**: For auto-launching the local server when its server scripts are updated.

## Installing
---
To run this project, take the steps using the console:

1. Download this project from GitHub:
```
git clone https://github.com/zongronghuang/cookie_login_page.git
``` 
You can also download it as a .zip file:
**[https://github.com/zongronghuang/cookie_login_page](https://github.com/zongronghuang/cookie_login_page)**

2. Go to the **cookie_login_page** folder.

3. Install Express using the console:
```
npm install express
```

4. Install Handlebars
```
npm install express-handlebars
```

5. Install body-parser
```
npm install body-parser
```

6. Install cookie-parser
```
npm install cookie-parser
```

7. Install nodemon
```
npm install nodemon
```

8. Launch the local server:
```
nodemon app.js
```

9. Open a web browser and enter the URL:
```
localhost:3000
```

10. Now the web app is ready for use.

## How to Use
---
1. Enter a set of email and password to log in.

2. When the email or the password is not correct, a warning message pops up.

3. To log in successfully, you may try the following email/password combinations:

+ `nick@shield.com`/`password`
+ `peter@parker.com`/`enajyram`

4. After you log in, you are then redirected to the success page.

5. Refresh the page and you remain on the success page due to the cookie-based auto-login: the app recognizes you with the cookie.

6. To delete the cookie in your web browser (e.g. Google Chrome), click **View** > **Developer** > **Developer tools**. Then, click **Application** on the top menu, and click **Cookies** on the left panel. Next, right-click on the cookie that records your username and click **Delete**. Close the page and enter `localhost:3000` in the browser to return to the login landing page.

---
<a class="anchor" id="1">1</a>: The project and the used material are only for educational purpose, with no intention of copyright infringement.