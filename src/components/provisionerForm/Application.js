import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ApplicationItem from './ApplicationItem';

const Application = ( {setApplication, applicationAppState} ) => {
    const handleClick = (e) => {
        if( e.target.nodeName.toLowerCase()=="span" || e.target.nodeName.toLowerCase()=="img" )
            setApplication(e.target.parentNode.id);
        else
            setApplication(e.target.id);
    };
    return (
        <div className="row" data-magellan-destination="aplications" id="aplications" data-equalizer>
        <h2><i className="step fi-social-dropbox"></i> Select Aplication</h2>
        <ApplicationItem identifier="freeBSDAMP" handleChange={handleClick} name="FreeBSD AMP"/>
        <ApplicationItem identifier="LAMP" handleChange={handleClick} name="LAMP"/>
        <ApplicationItem identifier="LEMP" handleChange={handleClick} name="LEMP"/>
        <ApplicationItem identifier="Joomla" handleChange={handleClick} name="Joomla"/>
        <ApplicationItem identifier="Drone" handleChange={handleClick} name="Drone"/>
        <ApplicationItem identifier="Ghost" handleChange={handleClick} name="Ghost"/>
        <ApplicationItem identifier="Rails" handleChange={handleClick} name="Rails"/>
        <ApplicationItem identifier="Drupal" handleChange={handleClick} name="Drupal"/>
        <ApplicationItem identifier="MongoDB" handleChange={handleClick} name="MongoDB"/>
        <ApplicationItem identifier="Node" handleChange={handleClick} name="Node"/>
        <ApplicationItem identifier="Cassandra" handleChange={handleClick} name="Cassandra"/>
        <ApplicationItem identifier="Stack" handleChange={handleClick} name="Stack"/>
        <ApplicationItem identifier="Django" handleChange={handleClick} name="Django"/>
        <ApplicationItem identifier="Docker" handleChange={handleClick} name="Docker"/>
        <ApplicationItem identifier="Magento" handleChange={handleClick} name="Magento"/>
        <ApplicationItem identifier="GitLab" handleChange={handleClick} name="GitLab"/>
        <ApplicationItem identifier="MumbleServer" handleChange={handleClick} name="MumbleServer"/>
        <ApplicationItem identifier="MediaWiki" handleChange={handleClick} name="MediaWiki"/>
        <ApplicationItem identifier="WordPress" handleChange={handleClick} name="WordPress"/>
        <ApplicationItem identifier="OwnCloud" handleChange={handleClick} name="OwnCloud"/>
        <ApplicationItem identifier="Dokku" handleChange={handleClick} name="Dokku"/>
        <ApplicationItem identifier="PHPMyAdmin" handleChange={handleClick} name="PHPMyAdmin"/>
        <ApplicationItem identifier="freeBSDAMP" handleChange={handleClick} name="freeBSDAMP"/>
        <ApplicationItem identifier="Redmine" handleChange={handleClick} end="true" name="Redmine"/>
      </div>
    );
};

Application.propTypes = {
    setApplication: PropTypes.func.isRequired,
    applicationAppState: PropTypes.object.isRequired
};

export default Application;
