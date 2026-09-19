import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FinanceDemo } from '@/components/portfolio/FinanceDemo';
import { KnowledgeGraph } from '@/components/portfolio/KnowledgeGraph';
import { buildKnowledgeGraph } from '@/lib/portfolio/cases';
import { getDictionary } from '@/lib/portfolio/dictionaries';

describe('portfolio interactions', () => {
  it('replays the finance demo without losing the disclosure', () => {
    const dictionary = getDictionary('pt');
    render(<FinanceDemo dictionary={dictionary.finance} />);

    fireEvent.click(
      screen.getByRole('button', { name: dictionary.finance.replay }),
    );

    expect(
      screen.getByText(/dados inteiramente simulados/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(dictionary.finance.agentMessage),
    ).toBeInTheDocument();
  });

  it('filters the knowledge map from a case node', () => {
    const dictionary = getDictionary('pt');
    render(
      <KnowledgeGraph
        graph={buildKnowledgeGraph('pt')}
        locale="pt"
        dictionary={dictionary.knowledge}
      />,
    );

    const homelab = screen.getByRole('button', { name: /Homelab/i });
    fireEvent.click(homelab);

    expect(homelab).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /Kubernetes/i })).toHaveClass(
      'is-related',
    );
    expect(screen.getByRole('button', { name: /Java/i })).toHaveClass(
      'is-muted',
    );
  });
});
