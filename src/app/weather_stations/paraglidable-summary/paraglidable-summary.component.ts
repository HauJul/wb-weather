import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ParaglidableForecast } from '../paraglidable.service';

@Component({
    selector: 'app-paraglidable-summary',
    imports: [CommonModule],
    template: `
        @if (flyValue) {
            <section class="paraglidable-strip">
                <div class="paraglidable-cards">
                    <article class="paraglidable-card paraglidable-card-fly">
                        <span>Fly</span>
                        <strong>{{ flyValue.fly * 100 | number:'1.1-1' }} %</strong>
                    </article>
                    <article class="paraglidable-card paraglidable-card-xc">
                        <span><i class="bi bi-compass-fill"></i>XC</span>
                        <strong>{{ flyValue.XC * 100 | number:'1.1-1' }} %</strong>
                    </article>
                </div>
            </section>
        }
    `,
    styles: [
        `
        :host {
            display: block;
        }

        .paraglidable-strip {
            margin: 0.85rem 0 1rem;
            display: grid;
            gap: 0.65rem;
        }

        .paraglidable-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.75rem;
        }

        .paraglidable-card {
            display: grid;
            gap: 0.45rem;
            padding: 0.9rem 1rem;
            border-radius: 1rem;
            border: 1px solid rgba(15, 23, 42, 0.08);
            background: linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(246, 248, 252, 0.96));
            box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }

        .paraglidable-card span {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            font-size: 0.88rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }

        .paraglidable-card strong {
            font-size: 1.45rem;
            line-height: 1;
        }

        .paraglidable-card-fly {
            background: linear-gradient(160deg, rgba(239, 246, 255, 0.98), rgba(219, 234, 254, 0.92));
        }

        .paraglidable-card-xc {
            background: linear-gradient(160deg, rgba(240, 253, 244, 0.98), rgba(220, 252, 231, 0.92));
        }
        `
    ]
})
export class ParaglidableSummaryComponent {
    @Input() flyValue: ParaglidableForecast | null = null;
}
