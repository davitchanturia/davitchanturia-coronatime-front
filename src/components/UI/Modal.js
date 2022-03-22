import Warning from 'components/UI/svg/Warning';
import Xclose from 'components/UI/svg/Xclose';

const Modal = (props) => {
  return (
    <div
      className='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div
        id='modal-child'
        className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'
      >
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        ></div>

        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>

        <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
          <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-4'>
            <button
              onClick={props.onCancel}
              type='button'
              className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <Xclose />
            </button>
          </div>
          <div className='sm:flex sm:items-start'>
            <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 sm:mx-0 sm:h-10 sm:w-10'>
              <Warning />
            </div>
            <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
              <div className='mt-2'>
                <p className='text-md text-slate-900 '>
                  Are you sure you want to log out?
                </p>
              </div>
            </div>
          </div>
          <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
            <button
              onClick={props.onConfirm}
              type='submit'
              className='w-full capitalize inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm'
            >
              log out
            </button>
            <button
              onClick={props.onCancel}
              type='button'
              className='mt-3 w-full capitalize inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
