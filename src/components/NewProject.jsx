import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      //Show the Error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    console.log({ enteredTitle, enteredDescription, enteredDueDate });
  }

  return (
    <>
      {/* problem */}
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-2xl font-bold text-stone-700 my-4">
          Invalid Input
        </h2>
        <p className=" text-stone-600 mb-4">
          Please enter a valid title, description and due date (non-empty
          values).
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-600 hover:text-stone-900"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 text-stone-50 bg-stone-800 rounded-md hover:text-stone-100"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={titleRef} />
          <Input label="Description" textarea ref={descriptionRef} />
          <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
