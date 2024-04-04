// root.tsx
// Ojos Project
// 
// This is the root of the website at `/`.
import Layout from '../components/Layout'
import GrandmaImage from "/static/images/grandma.jpg"
import JosephGrandmaImage from "/static/images/joseph-grandma.jpg"
import "../styles/Root.css"
import { useEffect, useState } from 'react'

interface Member {
    name: string
    email: string
    roles: string[]
    institution: string
    website: {label: string, value: string}
    joined: string
    avatar: string
    contributions: string[]
    active: boolean
}


export default function Root() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch("https://docs.ojosproject.org/data/url/members.json", {
            method: "GET",
        }).then((response) => response.json()).then(data => {
            setTeam(data.map((member: Member) => {
                if (member.active && member.contributions.length) {
                    return member;
                }
            }))
        })
    }, [])

    function TeamMember(props: {member?: Member}) {
        if (!props.member) {
            return (<></>)
        }
        return (
            <a className='member_container' target="_blank" rel="noopener noreferrer" href={props.member.website.value}>
                <img src={props.member.avatar+"&s=175"} alt={`Gravatar for ${props.member.name}.`}/>
                <br/>
                <h3>{props.member.name}</h3>
                <p>{props.member.institution.toLowerCase()}</p>
                <p>{props.member.roles[0].toLowerCase()}</p>
            </a>
        )
    }
    
    return (
        <Layout>
            <div className="story">
                <div className="story_text">
                <h1>Creating an easier way to stay connected with who you love.</h1>
                <p>The Ojos Project is a UCI-backed research endeavor in which we aim to understand the needs of hospice patients, caregivers, and healthcare specialists to provide them with a better way to address the hospice experience. By utilizing modern technologies and analyzing previous methods, we will ensure nurses and caregivers stay connected to provide a sense of comfort and confidence during your loved one's care.</p>
                </div>
                <img className="story_image" src={GrandmaImage} alt="Carlos with his grandmother"></img>
            </div>

            <div className='story' id="purpose">
                <img className='story_image' src={JosephGrandmaImage} alt="Joseph's family"/>
                <div className='story_text'>
                    <h1>Our Purpose</h1>
                    <p>Hospice patients are often immobile and slowly lose their independence, relying on the people around them to take care of them. It's difficult to help someone in this position when we often have other responsibilities, such as work.</p>
                    <p>During this moment, caregivers often have a lot on their mind. This can become dangerous if the caregiver forgets critical information about the patient's care, loses track of how often medication was taken, or forgets to report the patient's level of comfort.</p>
                    <p>The purpose of the Ojos Project is to increase patient independence by providing a kiosk-like assistant and to make sure all caregivers are on the same page by ensuring all information of the patient's care is on one device.</p>
                </div>
            </div>


            <div className='our_team' id="team">
                <h1>Our Team</h1>
                <div className='team_members'>
                    {team.map((member) => {return <TeamMember member={member}/>})}
                </div>

                <p>... and <a href="https://docs.ojosproject.org/url/members/">more</a>.</p>
            </div>
        </Layout>
    )
}
