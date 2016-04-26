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
        <h2><i className="step fi-social-dropbox"></i> Select Application</h2>
        <ApplicationItem applicationAppState={applicationAppState} identifier="freeBSDAMP" handleClick={handleApplicationClick} name="FreeBSD AMP"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="LAMP" handleClick={handleApplicationClick} name="LAMP"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="LEMP" handleClick={handleApplicationClick} name="LEMP"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Joomla" handleClick={handleApplicationClick} name="Joomla"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Drone" handleClick={handleApplicationClick} name="Drone"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Ghost" handleClick={handleApplicationClick} name="Ghost"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Rails" handleClick={handleApplicationClick} name="Rails"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Drupal" handleClick={handleApplicationClick} name="Drupal"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="MongoDB" handleClick={handleApplicationClick} name="MongoDB"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Node" handleClick={handleApplicationClick} name="Node"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Cassandra" handleClick={handleApplicationClick} name="Cassandra"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Stack" handleClick={handleApplicationClick} name="Stack"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Django" handleClick={handleApplicationClick} name="Django"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Docker" handleClick={handleApplicationClick} name="Docker"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Magento" handleClick={handleApplicationClick} name="Magento"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="GitLab" handleClick={handleApplicationClick} name="GitLab"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="MumbleServer" handleClick={handleApplicationClick} name="MumbleServer"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="MediaWiki" handleClick={handleApplicationClick} name="MediaWiki"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="WordPress" handleClick={handleApplicationClick} name="WordPress"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="OwnCloud" handleClick={handleApplicationClick} name="OwnCloud"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Dokku" handleClick={handleApplicationClick} name="Dokku"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="PHPMyAdmin" handleClick={handleApplicationClick} name="PHPMyAdmin"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="Redmine" handleClick={handleApplicationClick} end="true" name="Redmine"/>
        <ApplicationItem applicationAppState={applicationAppState} identifier="none" handleClick={handleApplicationClick} end="true" name="None"/>
      </div>
    );
};

Application.propTypes = {
    setApplication: PropTypes.func.isRequired,
    applicationAppState: PropTypes.object.isRequired
};

export default Application;
