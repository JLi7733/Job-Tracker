import React from 'react';
import './App.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

let jobData = require('./LinkedIn_Data.json');

interface Option {
  label: string;
}

interface SearchBoxProps {
  title: string;
  options: Option[];
}

interface JobProps {
  title: string;
  company: string;
  location: string;
}

const sites: Option[] = [
  { label: 'LinkedIn'},
  { label: 'Indeed'},];

function Intro(){
  return(
    <div className='Intro'>
      Welcome to the Job Tracker :(
      <br></br>
      This is to search up jobs that's all
    </div>
  )
}

function SearchBox(props:SearchBoxProps){
  return (
    <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={props.title} />}
      />
  )
}

function JobCard(props:JobProps){
  return(
    <div className='JobCard'>
      <div className='title'>{props.title}</div>
      <div className='company'>{props.company}</div>
      <div className='locagtion'>{props.location}</div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <div className='banner'>Job Tracker
        <div className='subtitle'>
          By Jonathan Li
          <Intro></Intro>
        </div>
      </div>

      <div className='filters'>
        <SearchBox title = "Site" options = {sites}></SearchBox>
      </div>
      <div className='ArtistGrid'>
        {jobData.data.map((job: { name: string; company: string; location: string; }) => (
          <JobCard title = {job.name} company={job.company} location={job.location}></JobCard>
        ))}  
      </div>
    </div>
  );
}

export default App;
