import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUser} from '../../redux/features/userSlice';

const UserRedux = () => {
  
  let dispatch = useDispatch();

  //get data from redux store
  let userState = useSelector((store) => {
    return store['users'];  
  })

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const {loading, users} = userState;

  return (
    <>
    <div className='container mt-3 text-primary'>
      <div className='row'>
        <div className='col-12'>
          <h3>Users Data</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
        {/* <div>  //just texting perpus
          <h1>User Data</h1>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </div> */}
          {
            loading && (<h3 className=''>...loading</h3>)
          }
          {
            !loading && 
            <table className='table table-hover text-center table-striped'>
              <thead>
                <tr>
                  <th>id:</th>
                  <th>Name:</th>
                  <th>Email:</th>
                  <th>address:</th>
                  <th>company</th>
                  <th>website</th>
                  <th>registered</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) =>{
                    return(
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                        <td>{user.company.name}</td>
                        <td>{user.website}</td>
                        <td>{user.login.registered}</td>
                      </tr>
                    ) 
                  })
                }
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default UserRedux;