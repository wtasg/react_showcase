import { useState } from 'react';

interface CollapsiblePanelProps {
    title: string;
    children: React.ReactNode;
}

function CollapsiblePanel({ title, children }: CollapsiblePanelProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`border-r border-gray-300 flex flex-col overflow-hidden ${isOpen ? 'flex-1 min-w-48' : 'w-8'}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-left font-mono text-sm font-bold p-1 hover:bg-gray-100 cursor-pointer flex-shrink-0"
                style={isOpen ? undefined : { writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
                {isOpen ? `- ${title}` : title}
            </button>
            {isOpen && (
                <div className="p-2 overflow-auto flex-1 font-mono text-sm whitespace-pre">
                    {children}
                </div>
            )}
        </div>
    );
}

const PANELS: { title: string; content: string }[] = [
    {
        title: 'InterMutationAliasingEffects',
        content: `// InterMutationAliasingEffects pass
// Tracks aliasing relationships between mutable values
// across mutations to ensure correctness.

function analyze(fn) {
  const aliases = new Map();
  for (const instr of fn.body) {
    trackAliases(instr, aliases);
  }
  return aliases;
}`,
    },
    {
        title: 'AnalyseFunctions',
        content: `// AnalyseFunctions pass
// Analyses each function definition to collect
// metadata: side-effects, captured variables, etc.

function analyseFunctions(program) {
  for (const fn of program.functions) {
    fn.meta = collectMeta(fn);
  }
}`,
    },
    {
        title: 'OptimizePropsMethodCalls',
        content: `// OptimizePropsMethodCalls pass
// Replaces repeated props.foo() calls with a
// cached local variable where safe to do so.

function optimize(fn) {
  const cache = new Map();
  rewrite(fn.body, cache);
}`,
    },
    {
        title: 'InferTypes',
        content: `// InferTypes pass
// Infers types for SSA values using a simple
// fixed-point dataflow algorithm.

function inferTypes(fn) {
  let changed = true;
  while (changed) {
    changed = propagate(fn);
  }
}`,
    },
    {
        title: 'ConstantPropagation',
        content: `// ConstantPropagation pass
// Replaces uses of known-constant SSA values
// with their literal values.

function constantProp(fn) {
  const constants = findConstants(fn);
  substitute(fn.body, constants);
}`,
    },
    {
        title: 'EliminateRedundantPhi',
        content: `// EliminateRedundantPhi pass
// Removes phi nodes whose all operands are
// the same value.

function eliminateRedundantPhi(fn) {
  for (const block of fn.blocks) {
    block.phis = block.phis.filter(phi =>
      !allSame(phi.operands)
    );
  }
}`,
    },
    {
        title: 'SSA',
        content: `// SSA (Static Single Assignment) pass
// Converts the IR into SSA form by inserting
// phi nodes at join points.

function toSSA(fn) {
  const dominators = computeDominators(fn);
  insertPhis(fn, dominators);
  renameVariables(fn);
}`,
    },
    {
        title: 'MergeConsecutiveBlocks',
        content: `// MergeConsecutiveBlocks pass
// Merges basic blocks that are connected by
// an unconditional branch.

function mergeBlocks(fn) {
  let changed = true;
  while (changed) {
    changed = tryMerge(fn.blocks);
  }
}`,
    },
    {
        title: 'InlineImmediatelyInvokedFunctionExpressions',
        content: `// InlineIIFE pass
// Inlines immediately-invoked function
// expressions (IIFEs) at their call site.

function inlineIIFEs(fn) {
  for (const instr of fn.body) {
    if (isIIFE(instr)) inline(instr, fn);
  }
}`,
    },
    {
        title: 'DropManualMemoization',
        content: `// DropManualMemoization pass
// Removes useMemo / useCallback wrappers that
// the compiler can prove are unnecessary.

function dropMemo(fn) {
  for (const call of findMemoCalls(fn)) {
    if (isSafeToRemove(call, fn)) remove(call);
  }
}`,
    },
    {
        title: 'PruneMaybeThrows',
        content: `// PruneMaybeThrows pass
// Removes "maybe-throws" annotations from
// instructions proven not to throw.

function pruneThrows(fn) {
  for (const instr of fn.body) {
    if (instr.mayThrow && canProveNoThrow(instr)) {
      instr.mayThrow = false;
    }
  }
}`,
    },
    {
        title: 'HIR',
        content: `function MyApp
MyApp(): <unknown> $9
bb0 (block):
  [1] <unknown> $0 = LoadGlobal import 'react'
  [2] <unknown> $1 = 0
  [3] <unknown> $2 = Call <unknown> $0(
  [4] <unknown> $5 = Destructure Const
  <unknown> setValue$4 ] = <unknown> $2
  [5] <unknown> $6 = JSXText "Hello World"
  [6] <unknown> $7 = JSX <div>{<unknown>
  [7] Return Explicit <unknown> $7`,
    },
    {
        title: 'EnvironmentConfig',
        content: `// EnvironmentConfig
{
  "inferEffectDependencies": false,
  "enableAssumeHooksFollowRulesOfReact": true,
  "enableTransitivelyFreezeFunctionExpressions": true,
  "validateRefAccessDuringRender": true,
  "validateNoCapitalizedCalls": null,
  "lowerContextAccess": null
}`,
    },
    {
        title: 'SourceMap',
        content: `// SourceMap
// Maps compiled output positions back to
// original source positions.

{
  "version": 3,
  "sources": ["MyApp.jsx"],
  "mappings": "AAAA,SAAS,KAAK..."
}`,
    },
];

export function Collapsible() {
    return (
        <div className="flex flex-row min-h-screen overflow-hidden border border-gray-300 font-mono">
            {PANELS.map(({ title, content }) => (
                <CollapsiblePanel key={title} title={title}>
                    {content}
                </CollapsiblePanel>
            ))}
        </div>
    );
}
