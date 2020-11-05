# Table of Contents
1. [Step by Step for users](#step-by-step-for-users)
1. [Step by Step for contact-form](#step-by-step-for-contact-form)
1. [Delete a local branch in Git](#delete-a-local-branch-in-git)
1. [NullInjectorError by E2E Test](#nullInjectorError-by-e2e-test)
 

# Here are protocols of components, functions/method, technologíes 

## Step by Step for users
 1. Download the primeNg liberies useing the commands 
 1. Import all the module you are going to use in the  admin module file of your project
 1. Create 4 files the .html (Makeup file), .scss ( the style file), .spec.ts (the method file), and .ts ( component file) files using the command 'ng generate component manage-user' in the respective directory .
 1. Inside the component file ( .ts) for user, you import the angular libery you are going to use ( Component, OnInit ) from the angular core folder. then you also import the some liberies from the primeNg folder (ConfirmationService, MessageService ) these services will help us to manage the confirmation and message dialog box.
 1. Next you manage all your functions in the componet manage-user file.
 1. After you create a service that will exercute all the function/methods of the manage-user
 1. create all a file that will user to declear variables of the users (ge name, forname, email, age .......etc)
 1. lastly you create two files of in-memory that will store data for users.
 1. run your code if any error correct it run back.



# Step by Step for contact-form
1. Import desired modules -  **Module file**
```ts
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'; 
import { RippleModule } from 'primeng/ripple'; // pRipple would not works
import { InputTextareaModule } from 'primeng/inputtextarea';
```
1. Create model -- **Model file**
```ts
ng g class contact // if needed
```
1. Create component  -- html, ts, scss
1. Rename css to scss // If needed
1. Export component file
1. Implement  desired logic i.e validation, sending
1. Design HTML with primeng and Bootstrap -- **HTML file**

|PrimeNG Css-class |Description|
|--|---|
|p-grid|to represents a grid witd div tag|
|p-ai-stretch|@Idrice need helps|
|p-inputgroup|@Idrice need helps|
|pInputText|Extended input as primeng input important!|
|pButton|Extended button as primeng button important!|
|pRipple|Extended input as primeng input important!|
|required| To valide input element using angular|
|[disabled ]|Binding using angular|
|label="Envoyer"|Content of button |
|formControlName="mgs"|To use for Validation |
 
# Delete a local branch in Git
```js
git branch -l // List local branch 
git branch -D  nameOfLocalBranch //
```
 
# NullInjectorError by E2E Test
Just **import HttpClientTestingModule** in desired spec.ts file
 


## The protocol how github destop function
