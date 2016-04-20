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
        <ApplicationItem identifier="freeBSDAMP" handleClick={handleClick} name="FreeBSD AMP"/>
        <ApplicationItem identifier="LAMP" handleClick={handleClick} name="LAMP"/>
        <ApplicationItem identifier="LEMP" handleClick={handleClick} name="LEMP"/>
        <ApplicationItem identifier="Joomla" handleClick={handleClick} name="Joomla"/>
        <ApplicationItem identifier="Drone" handleClick={handleClick} name="Drone"/>
        <ApplicationItem identifier="Ghost" handleClick={handleClick} name="Ghost"/>
        <ApplicationItem identifier="Rails" handleClick={handleClick} name="Rails"/>
        <ApplicationItem identifier="Drupal" handleClick={handleClick} name="Drupal"/>
        <ApplicationItem identifier="MongoDB" handleClick={handleClick} name="MongoDB"/>
        <ApplicationItem identifier="Node" handleClick={handleClick} name="Node"/>
        <ApplicationItem identifier="Cassandra" handleClick={handleClick} name="Cassandra"/>
        <ApplicationItem identifier="Stack" handleClick={handleClick} name="Stack"/>
        <ApplicationItem identifier="Django" handleClick={handleClick} name="Django"/>
        <ApplicationItem identifier="Docker" handleClick={handleClick} name="Docker"/>
        <ApplicationItem identifier="Magento" handleClick={handleClick} name="Magento"/>
        <ApplicationItem identifier="GitLab" handleClick={handleClick} name="GitLab"/>
        <ApplicationItem identifier="MumbleServer" handleClick={handleClick} name="MumbleServer"/>
        <ApplicationItem identifier="MediaWiki" handleClick={handleClick} name="MediaWiki"/>
        <ApplicationItem identifier="WordPress" handleClick={handleClick} name="WordPress"/>
        <ApplicationItem identifier="OwnCloud" handleClick={handleClick} name="OwnCloud"/>
        <ApplicationItem identifier="Dokku" handleClick={handleClick} name="Dokku"/>
        <ApplicationItem identifier="PHPMyAdmin" handleClick={handleClick} name="PHPMyAdmin"/>
        <ApplicationItem identifier="freeBSDAMP" handleClick={handleClick} name="freeBSDAMP"/>
        <ApplicationItem identifier="Redmine" handleClick={handleClick} end="true" name="Redmine"/>
        <ApplicationItem identifier="application_none" handleClick={handleClick} end="true" name="None"/>
      </div>
    );
};

Application.propTypes = {
    setApplication: PropTypes.func.isRequired,
    applicationAppState: PropTypes.object.isRequired
};

export default Application;
