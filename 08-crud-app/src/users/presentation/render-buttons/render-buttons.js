import usersStore from "../../store/users-store";
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons  = ( element ) => {

    const nextButton = document.createElement('Button');
    nextButton.innerText = 'Next >';

    const previousButton = document.createElement('Button');
    previousButton.innerText = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    console.log( usersStore.getCurrentPage() );

    element.append( previousButton, currentPageLabel, nextButton );

};