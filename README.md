Image search app

Such components are created
- Searchbar;
- ImageGallery;
- ImageGalleryItem;
- Loader;
- Button;
- Modal.
  

Pixabay public image search service was used for HTTP requests. 
_______________

Searchbar component:
The component accepts one prop onSubmit - a function to pass the input value when the form is submitted. 

ImageGallery component:
List of image cards

ImageGalleryItem component: 
List item component with image

Button component:
When you click the Load More button, the following image pages are loaded and processed along with the previous ones. After loading and rendering the new batch of images, the page will scroll down
The button Load more is only displayed when there are multiple images loaded. If the array of images is empty, the button is not displayed.

Loader component:
Spinner component is displayed when images are loading. The application uses a ready-made component - react-loader-spinner

Modal component:
Clicking on a gallery item opens a modal window with a dark overlay and displays a large version of the image. The modal window is closed by pressing the ESC key or by clicking on the overlay.

________________

Image search application was made with create react app. 


