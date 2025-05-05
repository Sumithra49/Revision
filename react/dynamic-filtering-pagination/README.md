Advanced Assignment: Dynamic Filters, Pagination, and API Data Synchronization
Objective:
Build a React app that fetches and displays data from a public API with multiple dynamic filters (not just search), server-side pagination, and proper synchronization between filters and pagination.

Requirements:

API Fetching with Filters:

Use a public API (like https://jsonplaceholder.typicode.com or another you choose) that can simulate multiple filter parameters.
Create at least two filters — for example:
Filter by category (or user ID).
Filter by status or tag (you can mock this if the API lacks it).
When the user changes a filter, reset the page number to 1 and fetch fresh results.
Server-Side Pagination:

Fetch 10 results per page.
Include Next and Previous buttons for navigating pages.
Display the current page and total pages (you can calculate this if the API provides total item count).
State Management with Synchronization:

Use useState to manage:
Active filters.
Current page.
Fetched data.
Loading and error states.
Use useEffect to trigger the correct API calls whenever filters or page change.
Make sure the filters and pagination are synchronized — changing a filter should not leave the user on an invalid page.
Error Handling:

Display a clear error message if the API request fails.
Show a loading spinner or message while waiting for data.
User Interface:

Show the list of results.
Show the active filters and allow the user to clear/reset them.
Disable the Next button on the last page and the Previous button on the first page.
Bonus Challenges (Optional but Stretching):

Add a refresh button to manually re-fetch the current data.
Use AbortController to cancel in-flight requests when the user changes filters or pages rapidly.
Use a dropdown or checkbox list for filters (not just text inputs).
Show a summary bar displaying the total number of items matching the current filters.
