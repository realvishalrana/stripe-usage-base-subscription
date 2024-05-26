import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gradient-to-br flex items-center justify-center">
      <div id='oopss' className="text-center">
        <div id='error-text' className="flex flex-col items-center text-base-content">
          <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" className="mt-20 h-64" />
          <span className="text-4xl mb-10">404 PAGE</span>
          <p className="text-lg mb-6">The page you were looking for could not be found</p>
          <a href='/' className="btn btn-info">Back to previous page</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
