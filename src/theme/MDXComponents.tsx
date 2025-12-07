import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Info, Cpu, Zap, CircuitBoard } from 'lucide-react';

// Import styles
import '../css/custom.css';

// Chapter Header Component
interface ChapterHeaderProps {
  title: string;
  subtitle?: string;
  chapterNumber: number;
}

export function ChapterHeader({ title, subtitle, chapterNumber }: ChapterHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 relative"
    >
      {/* Chapter number with tech styling */}
      <div className="flex items-center gap-1 sm:gap-4 mb-2 sm:mb-6">
        <div className="tech-label text-xs sm:text-sm">CHAPTER {chapterNumber.toString().padStart(2, '0')}</div>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Main title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-gray-900 font-mono leading-tight">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-none leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative circuit pattern */}
      <div className="absolute top-0 right-0 opacity-20 hidden lg:block">
        <CircuitBoard className="w-32 h-32 text-cyan-500" />
      </div>
    </motion.div>
  );
}

// Section Card Component
interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function SectionCard({ title, children, icon, className = '' }: SectionCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`card ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="text-cyan-500"
          >
            {icon}
          </motion.div>
        )}
        <h2 className="text-2xl font-bold text-gray-900 font-mono">{title}</h2>
      </div>
      <div className="prose max-w-none">
        {children}
      </div>
    </motion.div>
  );
}

// Expandable Section Component
interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
}

export function ExpandableSection({
  title,
  children,
  defaultExpanded = false,
  icon
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(defaultExpanded ? 'auto' : '0');

  React.useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setHeight(`${contentRef.current.scrollHeight}px`);
        setTimeout(() => setHeight('auto'), 300);
      } else {
        setHeight(`${contentRef.current.scrollHeight}px`);
        setTimeout(() => setHeight('0'), 10);
      }
    }
  }, [isExpanded]);

  return (
    <div className="expandable-section">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="expandable-header"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-cyan-500">{icon}</span>}
          <span className="text-lg font-semibold text-gray-900 font-mono">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.button>

      <motion.div
        ref={contentRef}
        style={{ height }}
        className={`expandable-content ${isExpanded ? 'expanded' : ''}`}
      >
        <div className="expandable-body">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// Callout Component
interface CalloutProps {
  type: 'info' | 'warning' | 'tip' | 'tech';
  title: string;
  children: React.ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const getCalloutClass = () => {
    switch (type) {
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      case 'tip':
        return 'success';
      case 'tech':
        return 'info';
      default:
        return 'info';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className={`callout ${getCalloutClass()}`}
    >
      <div className="callout-title">{title}</div>
      <div className="text-gray-600">{children}</div>
    </motion.div>
  );
}

// Diagram Container Component
interface DiagramContainerProps {
  title: string;
  children: React.ReactNode;
  caption?: string;
  techLabels?: string[];
}

export function DiagramContainer({ title, children, caption, techLabels = [] }: DiagramContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      <div className="card relative">
        <div className="blueprint-grid"></div>
        <div className="relative z-10">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 text-gray-900 font-mono">{title}</h3>
            {techLabels.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {techLabels.map((label, i) => (
                  <span key={i} className="tech-label">
                    {label}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="bg-gray-900 rounded-xl p-6 relative group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 rounded-t-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]"></div>
            <div className="relative z-10">
              {children}
            </div>
          </div>

          {caption && (
            <p className="mt-4 text-sm text-gray-600 italic text-center">
              {caption}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Interactive Code Component
interface InteractiveCodeProps {
  code?: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  children?: React.ReactNode;
}

export function InteractiveCode({
  code,
  language = 'text',
  title,
  showLineNumbers = true,
  children
}: InteractiveCodeProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = () => {
    const textToCopy = code || (typeof children === 'string' ? children : '');
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const textContent = code || (typeof children === 'string' ? children : '');
  const lines = textContent.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-6 relative group"
    >
      {title && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-cyan-500 font-mono">{title}</span>
          <button
            onClick={copyToClipboard}
            className="text-xs px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-lg hover:bg-cyan-100 transition-colors font-mono"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}

      <div className="relative bg-gray-900 rounded-xl border-none overflow-hidden shadow-lg">
        <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 rounded-t-xl shadow-[0_0_20px_rgba(6,182,212,0.3)]"></div>
        <pre className="p-6 pt-8 overflow-x-auto text-sm">
          <code className={`language-${language}`}>
            {showLineNumbers ? (
              lines.map((line, i) => (
                <div key={i} className="table-row">
                  <span className="table-cell text-gray-500 pr-4 text-right select-none">
                    {i + 1}
                  </span>
                  <span className="table-cell text-white">{line}</span>
                </div>
              ))
            ) : (
              <span className="text-white">{code}</span>
            )}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

// Default export for Docusaurus
export default {
  // Add our custom components
  ChapterHeader,
  SectionCard,
  Callout,
  Diagram: DiagramContainer,
  DiagramContainer,
  InteractiveCode,
  CodeBlock: InteractiveCode,
  Expandable: ExpandableSection,
  ExpandableSection,

  // Specialized components
  Equation: ({ children }: { children: React.ReactNode }) => (
    <div className="my-8 text-center">
      <div className="inline-block bg-gray-900/60 border border-cyan-500/20 p-6 rounded-lg">
        <div className="text-2xl font-mono text-cyan-300">
          {children}
        </div>
      </div>
    </div>
  ),

  Exercise: ({ children, number }: { children: React.ReactNode; number: string }) => (
    <Callout type="info" title={`Exercise ${number}`}>
      {children}
    </Callout>
  ),

  Note: ({ children }: { children: React.ReactNode }) => (
    <Callout type="info" title="Note">
      {children}
    </Callout>
  ),

  Warning: ({ children }: { children: React.ReactNode }) => (
    <Callout type="warning" title="Warning">
      {children}
    </Callout>
  ),

  Info: ({ children }: { children: React.ReactNode }) => (
    <Callout type="info" title="Info">
      {children}
    </Callout>
  ),
};