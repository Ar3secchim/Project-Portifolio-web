import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FinanceDemo } from '@/components/portfolio/FinanceDemo';
import { KnowledgeGraph } from '@/components/portfolio/KnowledgeGraph';
import { buildKnowledgeGraph } from '@/lib/portfolio/cases';
import { getDictionary } from '@/lib/portfolio/dictionaries';

describe('portfolio interactions', () => {
  it('replays the agent demo without losing the fictional-data notice', () => {
    const dictionary = getDictionary('pt');
    render(<FinanceDemo dictionary={dictionary.finance} locale="pt" />);

    fireEvent.click(
      screen.getByRole('tab', { name: dictionary.finance.tabs.agent }),
    );
    fireEvent.click(
      screen.getByRole('button', {
        name: new RegExp(dictionary.finance.replay, 'i'),
      }),
    );

    expect(screen.getByText(/dados fictícios/i)).toBeInTheDocument();
    expect(
      screen.getByText(dictionary.finance.chat.summary),
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
