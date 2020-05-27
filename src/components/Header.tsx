import React from 'react';
import '../syles/Header.css';

import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppStateDetails} from './_calendar_types';
import {LogOut} from '../redux/actions/firebaseActions';

interface HeaderDetails {
  month: string,
  year: number
}

const Header = (props:any) =>{
  return (
    <div className='header'>
      <div>
      {props.month} | {props.year}
      </div>
      <button onClick={()=>props.LogOut()}>Log Out</button>
    </div>
  )
}

const mapStateToProps = (state:AppStateDetails) =>{
  return {}
}

const mapDispatchToProps = (dispatch:Dispatch) =>{
  return {
    LogOut: () => dispatch(LogOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);