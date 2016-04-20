import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ApplicationItem from './ApplicationItem';

const Application = ( {setApplication, applicationAppState} ) => {
    const handleApplicationClick = (e) => {
        if( e.target.nodeName.toLowerCase()=="span" || e.target.nodeName.toLowerCase()=="img" )
            setApplication(e.target.parentNode.id);
        else
            setApplication(e.target.id);
    };
    return (
        <div className="row" data-magellan-destination="aplications" id="aplications" data-equalizer>
        <h2><i className="step fi-social-dropbox"></i> Select Aplication</h2>
        <ApplicationItem identifier="freeBSDAMP" handleClick={handleApplicationClick} name="FreeBSD AMP"/>
        <ApplicationItem identifier="LAMP" handleClick={handleApplicationClick} name="LAMP"/>
        <ApplicationItem identifier="LEMP" handleClick={handleApplicationClick} name="LEMP"/>
        <ApplicationItem identifier="Joomla" handleClick={handleApplicationClick} name="Joomla"/>
        <ApplicationItem identifier="Drone" handleClick={handleApplicationClick} name="Drone"/>
        <ApplicationItem identifier="Ghost" handleClick={handleApplicationClick} name="Ghost"/>
        <ApplicationItem identifier="Rails" handleClick={handleApplicationClick} name="Rails"/>
        <ApplicationItem identifier="Drupal" handleClick={handleApplicationClick} name="Drupal"/>
        <ApplicationItem identifier="MongoDB" handleClick={handleApplicationClick} name="MongoDB"/>
        <ApplicationItem identifier="Node" handleClick={handleApplicationClick} name="Node"/>
        <ApplicationItem identifier="Cassandra" handleClick={handleApplicationClick} name="Cassandra"/>
        <ApplicationItem identifier="Stack" handleClick={handleApplicationClick} name="Stack"/>
        <ApplicationItem identifier="Django" handleClick={handleApplicationClick} name="Django"/>
        <ApplicationItem identifier="Docker" handleClick={handleApplicationClick} name="Docker"/>
        <ApplicationItem identifier="Magento" handleClick={handleApplicationClick} name="Magento"/>
        <ApplicationItem identifier="GitLab" handleClick={handleApplicationClick} name="GitLab"/>
        <ApplicationItem identifier="MumbleServer" handleClick={handleApplicationClick} name="MumbleServer"/>
        <ApplicationItem identifier="MediaWiki" handleClick={handleApplicationClick} name="MediaWiki"/>
        <ApplicationItem identifier="WordPress" handleClick={handleApplicationClick} name="WordPress"/>
        <ApplicationItem identifier="OwnCloud" handleClick={handleApplicationClick} name="OwnCloud"/>
        <ApplicationItem identifier="Dokku" handleClick={handleApplicationClick} name="Dokku"/>
        <ApplicationItem identifier="PHPMyAdmin" handleClick={handleApplicationClick} name="PHPMyAdmin"/>
        <ApplicationItem identifier="freeBSDAMP" handleClick={handleApplicationClick} name="freeBSDAMP"/>
        <ApplicationItem identifier="Redmine" handleClick={handleApplicationClick} end="true" name="Redmine"/>
        <ApplicationItem identifier="application_none" handleClick={handleApplicationClick} end="true" name="None"/>
      </div>
    );
};

Application.propTypes = {
    setApplication: PropTypes.func.isRequired,
    applicationAppState: PropTypes.object.isRequired
};

export default Application;
