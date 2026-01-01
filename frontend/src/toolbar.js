// frontend/src/toolbar.js

import { DraggableNode } from './draggableNode';
import { BsInputCursorText, BsFileText, BsDatabase, BsRobot, BsTerminal, BsCodeSlash, BsChatSquareText } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { MdOutput } from 'react-icons/md';
import { SubmitButton } from './submit';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            {/* Left: Title */}
            <div className="toolbar-title">Build Pipeline</div>

            {/* Center: Draggable Nodes */}
            <div className="toolbar-nodes">
                <DraggableNode type='customInput' label='Input' icon={<BsInputCursorText />} />
                <DraggableNode type='llm' label='LLM' icon={<BsRobot />} />
                <DraggableNode type='customOutput' label='Output' icon={<MdOutput />} />
                <DraggableNode type='text' label='Text' icon={<BsFileText />} />
                <DraggableNode type='transformation' label='Transform' icon={<BsCodeSlash />} />
                <DraggableNode type='filter' label='Filter' icon={<FiFilter />} />
                <DraggableNode type='apiCall' label='API' icon={<BsTerminal />} />
                <DraggableNode type='database' label='DB' icon={<BsDatabase />} />
                <DraggableNode type='note' label='Note' icon={<BsChatSquareText />} />
            </div>

            {/* Right: Submit Button */}
            <div className="submit-container">
                <SubmitButton />
            </div>
        </div>
    );
};