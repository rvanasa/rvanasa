import React, {useState} from 'react';

import './Skill.scss';
import {FaCaretRight, FaFileAlt, FaFolder} from 'react-icons/fa';

function Skill(props) {
    let {tree, parent} = props;

    let [toggled, setToggled] = useState(tree.toggle || false);

    if(typeof tree === 'string') {
        tree = {name: tree};
    }

    function onClick(e) {
        e.stopPropagation();

        toggled = !toggled;
        setToggled(toggled);

        if(!tree.parts) {
            props.onToggle(tree, toggled);
        }
    }

    if(Array.isArray(tree)) {
        return (
            <div>
                {tree.map((part, i) => (
                    <div
                        key={i}
                        style={{paddingLeft: '2em'}}>
                        <div className="px-2">
                            <Skill tree={part} parent={parent} onToggle={props.onToggle}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div
            className={`skill ${toggled ? 'toggled' : ''} ${tree.parts ? 'parent' : ''} ${tree.className || ''}`}
            style={{...tree.style}}>
            <h5
                className="font-weight-light pt-0 pb-2 noselect d-flex align-items-center" style={{
                cursor: 'pointer',
                opacity: tree.parts ? (toggled ? .9 : .5) : 1,
            }} onMouseDown={onClick}>
                <span
                    className={`my-2 my-lg-0 ps-2 pe-3 mx-auto mx-lg-0 ${tree.iconClass} ${toggled && !tree.parts ? 'text-info' : 'text-light'}`}
                    style={{transform: toggled && !tree.parts && `scale(1.2)`}}>
                    {tree.parts && (
                        <FaCaretRight
                            className="mb-1 me-1" style={{
                            marginLeft: '-1em',
                            opacity: .5,
                            transform: !toggled && 'rotate(90deg)',
                        }}/>
                    )}
                    {React.createElement(tree.icon || (tree.parts ? FaFolder : FaFileAlt), {className: 'mb-1'})}
                </span>
                <span className="flex-grow-1">{tree.name}</span>
            </h5>
            {!toggled && tree.parts && (
                <div className="mt-2">
                    <Skill tree={tree.parts} parent={tree} onToggle={props.onToggle}/>
                </div>
            )}
        </div>
    );
}

export default Skill;