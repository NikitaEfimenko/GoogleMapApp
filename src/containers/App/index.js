import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { MainLayout } from '../../layouts'
import { Map, ToolsBar } from '../../containers'
import { map } from '../../helpers'

const App  = ({marks}) => 
<MainLayout>
  <ToolsBar marks={map(marks,`label`)}/>
  <Map marks={marks}/>
</MainLayout>

const mapStateToProps = state => ({
  marks: state
})


export default connect(mapStateToProps, null)(App);
