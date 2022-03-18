import { useState } from 'react';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router';
import apiClient from 'api/api';
import Modal from 'components/UI/Modal';

const NameAndLogout = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const logoutHandler = () => {
    (async () => {
      try {
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.post('api/logout');

        console.log(response);
        if (response.status === 200) {
          navigate('/login');
        }
      } catch (error) {}
    })();
  };

  return (
    <div className='flex flex-col text-center sm:flex-row'>
      <div className='sm:border-r-2 sm:border-gray-100 px-3 font-bold capitalize'>
        username
      </div>
      <div className='sm:px-3'>
        <button onClick={showModalHandler} className='cursor-pointer'>
          <Trans i18nKey='logout' />
        </button>
      </div>
      {showModal && (
        <Modal onConfirm={logoutHandler} onCancel={closeModalHandler} />
      )}
    </div>
  );
};

export default NameAndLogout;
