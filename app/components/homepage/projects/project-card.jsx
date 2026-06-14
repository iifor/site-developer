// @flow strict

import * as React from 'react';
import CodeBlock from '@/app/components/helper/code-block';

// 默认颜色：按类型分配
const TYPE_COLORS = {
  string: 'amber',
  array: 'amber',
  boolean: 'orange',
};

function getValueColor(field) {
  // 优先使用字段自定义颜色
  if (field.color) return field.color;
  return TYPE_COLORS[field.type] || 'cyan';
}

function renderField(field) {
  const { key, label, value, type } = field;
  const displayKey = label || key;
  const color = getValueColor(field);

  if (type === 'string') {
    return (
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">{displayKey}:</span>
        <span className="text-gray-400">{'\''}</span>
        <span className={`text-${color}-300`}>{value}</span>
        <span className="text-gray-400">{'\','}</span>
      </div>
    );
  }

  if (type === 'array') {
    return (
      <div className="ml-4 lg:ml-8 mr-2">
        <span className="text-white">{displayKey}:</span>
        <span className="text-gray-400">{' [\''}</span>
        {value.map((item, i) => (
          <React.Fragment key={i}>
            <span className={`text-${color}-300`}>{item}</span>
            {i < value.length - 1 && <span className="text-gray-400">{"', '"}</span>}
          </React.Fragment>
        ))}
        <span className="text-gray-400">{"],"}</span>
      </div>
    );
  }

  if (type === 'boolean') {
    return (
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">{displayKey}:</span>
        <span className={`text-${color}-400`}>{String(value)}</span>
        <span className="text-gray-400">,</span>
      </div>
    );
  }

  if (type === 'code') {
    return (
      <>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-green-400">{displayKey}:</span>
          <span className="text-orange-400">function</span>
          <span className="text-gray-400">{'() {'}</span>
        </div>
        {value.map((line, i) => (
          <div key={i} className={line.indent}>
            {line.prefix && <span className={line.prefixColor}>{line.prefix}</span>}
            {line.text && <span className={line.textColor || 'text-white'}>{line.text}</span>}
            {line.suffix && <span className={line.suffixColor || 'text-amber-300'}>{line.suffix}</span>}
            {line.end && <span className="text-gray-400">{line.end}</span>}
          </div>
        ))}
        <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
      </>
    );
  }

  // default
  return (
    <div>
      <span className="ml-4 lg:ml-8 mr-2 text-white">{displayKey}:</span>
      <span className={`text-${color}-400`}>{value}</span>
      <span className="text-gray-400">,</span>
    </div>
  );
}

function ProjectCard({ varName = 'project', title, fields }) {
  return (
    <CodeBlock title={title}>
      <div className="blink">
        <span className="mr-2 text-pink-500">const</span>
        <span className="mr-2 text-white">{varName}</span>
        <span className="mr-2 text-pink-500">=</span>
        <span className="text-gray-400">{'{'}</span>
      </div>
      {fields.map((field, i) => (
        <React.Fragment key={i}>
          {renderField(field)}
        </React.Fragment>
      ))}
      <div><span className="text-gray-400">{`};`}</span></div>
    </CodeBlock>
  );
};

export default ProjectCard;
