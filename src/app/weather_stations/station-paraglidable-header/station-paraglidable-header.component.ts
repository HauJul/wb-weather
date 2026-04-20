import { Component, Input } from '@angular/core';
import { ParaglidableForecast } from '../paraglidable.service';
import { ParaglidableSummaryComponent } from '../paraglidable-summary/paraglidable-summary.component';

@Component({
    selector: 'app-station-paraglidable-header',
    imports: [ParaglidableSummaryComponent],
    template: `
        <section class="station-paraglidable-header-layout">
            <section class="station-header-card">
                <h1>{{ title }}</h1>
            </section>

            <section class="station-paraglidable-card">
                @if (isLoading) {
                    <div class="status-box muted compact-status header-status">
                        <i class="bi bi-arrow-repeat spin"></i>
                        <span>{{ loadingText }}</span>
                    </div>
                } @else if (hasError) {
                    <div class="status-box danger compact-status header-status">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                        <span>{{ errorText }}</span>
                    </div>
                } @else {
                    <app-paraglidable-summary [flyValue]="flyValue"></app-paraglidable-summary>
                }
            </section>
        </section>
    `,
    styles: [
        `
        :host {
            display: block;
        }

        .station-paraglidable-header-layout {
            display: grid;
            gap: 0.9rem;
        }

        .station-header-card,
        .station-paraglidable-card {
            display: grid;
            gap: 1rem;
            padding: 1rem;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 1.25rem;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(246, 248, 252, 0.96));
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
            position: relative;
            overflow: hidden;
        }

        .station-header-card::after {
            content: '';
            position: absolute;
            inset: auto -4rem -5rem auto;
            width: 14rem;
            height: 14rem;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.18), transparent 70%);
            pointer-events: none;
        }

        .station-header-card h1 {
            margin: 0;
            font-size: clamp(1.4rem, 2.6vw, 2rem);
            line-height: 1.15;
            color: #0f172a;
            z-index: 1;
        }

        .status-box {
            display: inline-flex;
            align-items: center;
            gap: 0.7rem;
            padding: 0.9rem 1rem;
            border-radius: 0.95rem;
            font-weight: 600;
        }

        .status-box.muted {
            background: rgba(15, 23, 42, 0.05);
            color: #334155;
        }

        .status-box.danger {
            background: rgba(254, 242, 242, 1);
            color: #b91c1c;
        }

        .compact-status {
            font-size: 0.95rem;
            padding: 0.75rem 0.9rem;
        }

        .header-status {
            justify-self: start;
            z-index: 1;
        }

        app-paraglidable-summary {
            z-index: 1;
        }

        .spin {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @media (max-width: 768px) {
            .station-paraglidable-header-layout {
                gap: 0.8rem;
            }

            .station-header-card,
            .station-paraglidable-card {
                padding: 0.85rem;
                gap: 0.8rem;
            }

            .station-header-card h1 {
                font-size: clamp(1.25rem, 5vw, 1.6rem);
            }
        }
        `
    ]
})
export class StationParaglidableHeaderComponent {
    @Input() title = '';
    @Input() label = 'Paraglidable';
    @Input() flyValue: ParaglidableForecast | null = null;
    @Input() isLoading = false;
    @Input() hasError = false;
    @Input() loadingText = 'Paraglidable-Werte werden geladen ...';
    @Input() errorText = 'Die Paraglidable-Werte konnten nicht geladen werden.';
}
