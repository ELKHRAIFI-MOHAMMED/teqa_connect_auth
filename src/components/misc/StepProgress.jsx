// src/components/misc/StepProgress.jsx
export default function StepProgress({ step, total = 3 }) {
  const percentage = ((step - 1) / (total - 1)) * 100;

  return (
    <div className="w-full mb-8">
      {/* Barre de progression avec labels */}
      <div className="relative">
        {/* Ligne de fond */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          >
            {/* Effet de brillance sur la barre */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/30 to-transparent"></div>
          </div>
        </div>

        {/* Points d'étape */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between">
          {Array.from({ length: total }).map((_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber <= step;
            const isCurrent = stepNumber === step;

            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Point d'étape */}
                <div
                  className={`
                    w-6 h-6 rounded-full flex items-center justify-center
                    border-2 transition-all duration-300 transform
                    ${isCompleted
                      ? 'border-blue-600 bg-blue-600 scale-110'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'
                    }
                    ${isCurrent
                      ? 'ring-4 ring-blue-200 dark:ring-blue-900/40'
                      : ''
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className={`text-xs font-semibold ${isCurrent ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'}`}>
                      {stepNumber}
                    </span>
                  )}
                </div>

                {/* Label d'étape (optionnel) */}
                <span className={`absolute top-8 text-xs font-medium whitespace-nowrap ${
                  isCurrent
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  Étape {stepNumber}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Affichage texte avec animation */}
      <div className="mt-10 text-center">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
          Étape {step} sur {total}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {step === 1 && "Commençons par vos informations de base"}
          {step === 2 && "Configurez votre compte"}
          {step === 3 && "Finalisez votre inscription"}
          {step === 4 && "Presque terminé !"}
        </p>
      </div>
    </div>
  );
}
