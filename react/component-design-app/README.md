Assignment: Component Design - Props, Composition, Conditional Rendering
Instructions:
Component Design Overview:
Start by understanding the basic React component structure: function components, props, and state.
Use the following three core concepts to structure your components:
Props: Pass data from parent to child components.
Composition: Combine multiple components to create a complex UI.
Conditional Rendering: Render different UI elements based on conditions.
Part 1: Props in Action
Create a Greeting component that accepts the following props:

name (string) - The name of the person being greeted.
timeOfDay (string) - The time of day (morning, afternoon, evening).
The Greeting component should render a greeting message based on the time of day, such as:

"Good Morning, John!"
"Good Afternoon, Sarah!"
"Good Evening, Alex!"
Deliverables:

Code for the Greeting component.
Example usage of the Greeting component inside a parent component.
Part 2: Composition of Components
Create a UserProfile component that contains the following subcomponents:

Avatar: A component that displays a user's profile picture.
UserInfo: A component that displays the user’s name, email, and bio.
The UserProfile component should use composition to combine the Avatar and UserInfo components. You can pass data (like name, email, bio, imageUrl) as props to these child components.

Deliverables:

Code for the UserProfile, Avatar, and UserInfo components.
Example usage of the UserProfile component inside a parent component, passing in relevant data.
Part 3: Conditional Rendering
Create a LoginMessage component that conditionally renders one of two messages based on the isLoggedIn prop:

If isLoggedIn is true: render "Welcome back, User!"
If isLoggedIn is false: render "Please log in."
Create a Dashboard component that uses the LoginMessage component to display the appropriate message based on the user's login status. For example, if the user is logged in, display the welcome message; if they are logged out, ask them to log in.

Deliverables:

Code for the LoginMessage and Dashboard components.
Example usage of the Dashboard component with different values for the isLoggedIn prop.
Part 4: Combining Props, Composition, and Conditional Rendering
Create a UserDashboard component that combines:

Props: Accept user data such as name, age, email, and isLoggedIn.
Composition: Use UserProfile as a child component within UserDashboard.
Conditional Rendering: Show different UI elements based on the value of isLoggedIn:
If isLoggedIn is true, show UserProfile with the user's information and a "Logout" button.
If isLoggedIn is false, display a message like "You need to log in" and a "Login" button.
Deliverables:

Code for the UserDashboard, UserProfile, and any other components used.
Example usage of the UserDashboard component, demonstrating both logged-in and logged-out states.
Evaluation Criteria:
Correctness: Does the solution properly use props, composition, and conditional rendering as described?
Code Quality: Is the code clean, well-structured, and easy to follow?
Component Design: Are the components modular, reusable, and follow React best practices?
Creativity: How creatively did you implement the components and handle edge cases?
Bonus (Optional): Styling
Style the components using CSS or a CSS-in-JS solution (such as styled-components) to make the components visually appealing.
Submission Guidelines:
Submit the React code for all components.
Include an explanation of how you applied props, composition, and conditional rendering in each part.
Ensure the code is fully functional and runs without errors.
